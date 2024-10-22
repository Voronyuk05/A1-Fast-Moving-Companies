import {AdvancedMarker, APIProvider, Map, Pin} from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import { IAdress } from '@/types/companies.types';
import styles from './CompanyMapLocations.module.scss'

const MapTypeId = {
    HYBRID: 'hybrid',
    ROADMAP: 'roadmap',
    SATELLITE: 'satellite',
    TERRAIN: 'terrain'
};

export type MapConfig = {
    id: string;
    label: string;
    mapId?: string;
    mapTypeId?: string;
    styles?: google.maps.MapTypeStyle[];
};

const MAP_CONFIGS: MapConfig[] = [
    {
      id: 'dark',
      label: 'Dark',
      mapId: '739af084373f96fe',
      mapTypeId: MapTypeId.ROADMAP
    },
];

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : ''
export const CompanyMapLocations = ({location}: {location: IAdress[]}) => {
    const [mapConfig] = useState<MapConfig>(MAP_CONFIGS[0]);
    
    
    return (
        <section className={styles.map_company}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading='h4' color='black' weight='700'>Locations</Headings>
                    <div className={styles.locations}>
                    {location.map(({location}, index) => (
                        <Paragraph key={index} color='black' weight='500'>{location}</Paragraph>
                    ))}
                    </div>
                </div>
                <APIProvider apiKey={apiKey}>
                    <Map
                        defaultCenter={{lat: 37, lng: -121}}
                        defaultZoom={3}
                        mapId={mapConfig.mapId || null}
                        mapTypeId={mapConfig.mapTypeId}
                        styles={mapConfig.styles}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}>
                            {location.map(({lat, lng}, index) => (
                                <AdvancedMarker
                                key={index}
                                position={{lat: Number(lat), lng: Number(lng)}}>
                                    <Pin
                                    background={'#06965C'}
                                    borderColor={'#fff'}
                                    glyphColor={'#fff'}>
                                    </Pin>
                                </AdvancedMarker>
                            ))}
                    </Map>
                </APIProvider>
            </div>
        </section>
    )
}

export default CompanyMapLocations