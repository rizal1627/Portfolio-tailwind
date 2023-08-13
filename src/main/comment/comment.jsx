import React from "react";
import "../../App.css"


const Comment = () => {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 2520 || document.documentElement.scrollTop > 2520) {
        document.getElementById("comment").style.bottom = "0";
    } else {
        document.getElementById("comment").style.bottom = "-260px";
    }
    }
    return (
        <section>
            <div className="fixed h-32 right-0 bottom-0 border border-slate-600 rounded bg-slate-50" id="comment">
                <div className="p-5">
                    <h1>Tinggalkan Comment Disini</h1>
                    <input className="pl-2" type="text" id="fname" name="fname"></input>
                </div>
            </div>
        </section>
    )

}


export default Comment;