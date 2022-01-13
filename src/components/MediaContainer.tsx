import React, {useEffect, useState} from 'react';

const MediaContainer = (props: {path: string, playVideo: boolean}) => {
    const splitPath = props.path.split('.');
    const format = splitPath[splitPath.length - 1];
    const path = props.path ? props.path : 'noimage.png';
    const [url, setUrl] = useState('');
    useEffect(() => {
        if (format === 'mp4' && !props.playVideo) {
            setUrl(`/${process.env.PUBLIC_URL}static/video_preview.png`)
        } else {
            setUrl(`/${process.env.PUBLIC_URL}static/${path}`)
        }
    }, [])

    return (
        <div className="mediaContainer">
            { (format !== 'mp4' || !props.playVideo)
                ? <img src={url} className="imgScale"/>
                : <video autoPlay loop controls>
                    <source src={url} type='video/mp4'/>
                </video>
            }
        </div>
    );
};

export default MediaContainer;