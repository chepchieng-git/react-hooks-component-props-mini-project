import React from "react";

function Article(props) {
    const {title, date, preview, minutes} = props
    const displayDate = date || "January 1, 1970"

    const emojis = (time, emoji) => {
        const numEmojis = Math.ceil(time / (emoji === "☕️" ? 5 : 10))
        return emoji.repeat(numEmojis) + " "
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{displayDate}</small>
            <p>{preview}</p>
            <p>
                {emojis(minutes, "☕️")}
                {emojis(minutes, "🍱")}
                {minutes} min read
                </p>
        </article>
    )
}
export default Article