// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

// Додаємо middleware
server.use(middlewares);
server.use(jsonServer.bodyParser)

const filterData = (data, req) => {
  if (data.length > 0) {
    if(req.query.sortBy === 'asc') {
      return data.sort((a,b) => a.name.localeCompare(b.name))
    } else if (req.query.sortBy === 'desc') {
      return data.sort((a,b) => b.name.localeCompare(a.name))
    } else if (req.query.sortBy === 'best') {
      return data.sort((a,b) => b.rating - a.rating)
    } else if (req.query.sortBy === 'worst') {
      return data.sort((a,b) => a.rating - b.rating)
    } else if (req.query.sortBy === 'earliest') {
      return data.sort((a, b) => {
        const [yearA, monthA, dayA] = a.publishedAt.split('-').map(Number);
        const [yearB, monthB, dayB] = b.publishedAt.split('-').map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        
        return Number(dateA) - Number(dateB)
      })
    } else if (req.query.sortBy === 'latest') {
      return data.sort((a, b) => {
        const [yearA, monthA, dayA] = a.publishedAt.split('-').map(Number);
        const [yearB, monthB, dayB] = b.publishedAt.split('-').map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        
        return Number(dateB) - Number(dateA)
      })
    } else {
      return data
    }
  } else {
    return data
  }
}

const chainedFindDataItem = (item, id) => {
  if (item.id === Number(id)) {
    return item
  }
  for (let comment of item.comments) {
    if (comment.id) {
      if (comment.id !== Number(id)) {
        if (comment.comments.length) {
          return chainedFindDataItem(comment, id)
        }
      } else {
        return comment
      }
    }
  }
  return false
}

const getPatchedBody = (body, item, commentId) => {
  function updateNestedComment(comments) {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === Number(commentId)) {
        comments[i] = body
        return true;
      }
      if (comments[i].comments && comments[i].comments.length > 0) {
        const found = updateNestedComment(comments[i].comments);
        if (found) return true; 
      }
    }
    return false; 
  }

  updateNestedComment(item.comments);

  return item
}

// Кастомна логіка для точного пошуку в масиві


server.use('/tips-tricks/:articleId/comments/:id',  (req, res, next) => {
  if (req.method === 'GET') {
    const db = router.db; // Отримуємо доступ до бази даних
    const {articleId, id} = req.params;
    let tipsTricks = db.get('tips-tricks')
    
    if (id) {
      tipsTricks = tipsTricks.map(item => {
        if (item.id === Number(articleId)) {
          if (chainedFindDataItem(item, id)) {
            return chainedFindDataItem(item, id)
          } 
        } else {
          return
        }
      }).value();
    } else {
      tipsTricks = []
    }

    tipsTricks = filterData(tipsTricks, req)
    
    res.json(tipsTricks);
  } else {
    next(); // Якщо це не запит з тегами, передаємо далі
  }
})

server.use('/tips-tricks/:articleId',  (req, res, next) => {
  if (req.method === 'GET') {
    const db = router.db; // Отримуємо доступ до бази даних
    const {articleId} = req.params;
    let tipsTricks = db.get('tips-tricks')
    if (articleId) {
      tipsTricks = tipsTricks.map(item => {
        if (item.id === Number(articleId)) {
          return item
        } else {
          return
        }
      }).value();
    } else {
      tipsTricks = tipsTricks.value()
    }

    tipsTricks = filterData(tipsTricks, req)
    
    res.json(tipsTricks);
  } else {
    next(); // Якщо це не запит з тегами, передаємо далі
  }
})

server.use((req, res, next) => {
  if (req.method === 'GET' && req.url.includes('/companies')) {
    const db = router.db; 
    let companies = db.get('companies').filter(company => {
      for (let key of Object.keys(req.query)) {
        if (company[key] !== undefined && company[key] !== null && company[key] !== '') {
          if (key === 'rating') {
            if (JSON.stringify(company[key]) < req.query[key]) {
              return
            }
          } else if (key === 'addres') {
            if (company.addres.filter(({location}) => location.toLocaleLowerCase().includes(String(req.query[key]).toLocaleLowerCase())).length === 0) {
              return
            }
          } else if (typeof company[key] === 'string') {
            if (!company[key].toLocaleLowerCase().includes(String(req.query[key]).toLocaleLowerCase())) {
              return
            }
          } else if (!company[key].includes(req.query[key])) {
            return
          }
        }
      }
      return true
    }).value();

    companies = filterData(companies, req)
    
    res.json(companies);
  } else if (req.method === 'GET' && req.url.includes('/replies')) {
    const db = router.db; // Отримуємо доступ до бази даних
    let replies = db.get('replies').filter(reply => {
      for (let key of Object.keys(req.query)) {
        if (reply[key]) {
          if (!reply[key].includes(req.query[key])) {
            return
          }
        }
      }
      return true
    }).value();

    replies = filterData(replies, req)
    
    res.json(replies);
  } else if (req.method === 'GET' && req.url.includes('/tips-tricks')) {
    const db = router.db; // Отримуємо доступ до бази даних
    let tipsTricks = db.get('tips-tricks')

    tipsTricks = tipsTricks.filter(article => {
      for (let key of Object.keys(req.query)) {
        if (article[key]) {
          if (!article[key].includes(req.query[key])) {
            return
          }
        }
      }
      return true
    }).value();

    tipsTricks = filterData(tipsTricks, req)
    
    res.json(tipsTricks);
  } 
  else {
    next(); // Якщо це не запит з тегами, передаємо далі
  }
});

server.patch('/tips-tricks/:articleId/comments/:id', (req, res) => {
  const {articleId, id} = req.params;
  
  const newArticle = router.db.get('tips-tricks').map(item => { 
    if (item.id === Number(articleId)) {
      if (getPatchedBody(req.body, item, id)) {
        return getPatchedBody(req.body, item, id)
      }
    }   
    return null
  }).value()  

  
  if (newArticle) {
    router.db.get('tips-tricks')
    .find({ id: Number(articleId) })
    .assign(...newArticle)
    .write();
  
    res.json({ message: 'Resource overwritten', data: newArticle });
  } else {
    res.status(404).json({ message: 'Resource not found' });
  }
})

server.patch('/tips-tricks/:articleId', (req, res) => {
  const {articleId} = req.params;
  
  const newArticle = router.db.get('tips-tricks').map(item => { 
    if (item.id === Number(articleId)) {
      return {
        ...item,
        ...req.body
      }
    }   
    return null
  })  

  if (newArticle) {
    router.db.get('tips-tricks')
    .find({ id: Number(articleId) })
    .assign(...newArticle)
    .write();
  
    res.json({ message: 'Resource overwritten', data: newArticle });
  } else {
    res.status(404).json({ message: 'Resource not found' });
  }
})

// Використовуємо стандартний роутер JSON Server
server.use(router);

// Запускаємо сервер
server.listen(4000, () => {
  console.log('JSON Server is running');
});