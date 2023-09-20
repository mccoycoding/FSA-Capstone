import { useNavigate } from "react-router-dom"

export default function HomeContent() {
    const navigate = useNavigate();

    return (
        <div className="container text-center">
            <h1 className="display-1">Welcome to Unlucky Tanooki</h1>
            <p className="fs-5">We're thrilled to be your partner in creating the perfect keyboard that truly represents you</p>
            <p className="fs-5">Unleash your creativity and lets create a keyboard that reflects your unique style.
               Reach out to us today at Unlucky Tanooki,
               and together, we'll transform your desk setup into something extraordinary!</p>
            <button onClick={() => navigate('/shop')} className="btn btn-primary btn-lg">Shop Now!</button>
        </div>
    )
}