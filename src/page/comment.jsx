import React from "react";
import "../App.css"


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
            <div className="fixed h-32 right-0 bottom-0 border border-slate-600 rounded text-red-500 bg-teal-500 transition delay-150 duration-300 ease-in-out" id="comment">
                <div className="p-5">
                <h1>Tinggalkan Comment Disini</h1>
                    <input type="text" id="fname" name="fname"></input>
                </div>
            </div>
        </section>
    )

}


export default Comment;