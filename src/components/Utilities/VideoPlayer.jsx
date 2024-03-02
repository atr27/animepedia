"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeID }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "380",
        height: "260"
    }

    const ClosePlayer = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoButton}
                    className="text-warna-white float-right">
                    <XCircle size={46} />
                </button>
                <Youtube
                    videoId={youtubeID}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }
    const OpenPlayer = () => {
        return (
            <>
                <div>
                    <button onClick={handleVideoButton} className="rounded fixed bottom-2 right-2 w-64 h-14 bg-warna-accent text-warna-dark text-xl hover:bg-warna-dark hover:text-warna-accent transition-all shadow-xl border hover:border-warna-accent">
                        Watch Trailer
                    </button>
                </div>

            </>
        )
    }
    return isOpen ? <ClosePlayer /> : <OpenPlayer />
}

export default VideoPlayer