import './homepage.scss';

export default function Homepage() {

    return (
        <div className="homepage">
            <div className="homepage__header">
                Hello, I'm Bill Ott.
            </div>
            <div className="homepage__sub-header">
                I'm a Frontend Developer.
            </div>
            <div className="homepage__tagline">
                <p>
                    I build web apps, primarily with Vue and React. I have full-stack training and experience.
                </p>
                <p>
                    I live in Ann Arbor, Michigan. Outside of coding, I like playing retro video games, learning Japanese, and cooking up a storm.
                </p>
            </div>
        </div>
    );

}
