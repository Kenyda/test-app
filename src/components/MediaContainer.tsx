import React, {useEffect, useState} from 'react';

const MediaContainer = (props: {path: string | undefined, playVideo: boolean}) => {
    let splitPath;
    let [format, setFormat] = useState('');
    const [url, setUrl] = useState('');
    useEffect(() => {
        if (props.path) {
            splitPath = props.path.split('.');
            setFormat(splitPath[splitPath.length - 1]);
            if (props.path.includes('base64')) {
                setUrl(props.path)
            } else if (props.path.includes('mp4') && !props.playVideo) {
                setUrl(`/${process.env.PUBLIC_URL}static/video_preview.png`)
            } else setUrl(`/${process.env.PUBLIC_URL}static/${props.path}`)
        } else setUrl(`/${process.env.PUBLIC_URL}static/noimage.png`)
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