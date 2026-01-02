import { ScrollTrigger , SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);


function App(props) {
    return (
        <div className="flex-center h-dvh">
            <h1 className="text-3xl text-indigo-300">Hello ,Mouad!</h1>
        </div>
    );
}

export default App;