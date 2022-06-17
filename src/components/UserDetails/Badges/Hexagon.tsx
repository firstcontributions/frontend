export default function Hexagon ({children, size, color}) {
    return (

            <div className="badge-icon-container">
                {children}
                <style jsx>
                    {`
                        .badge-icon-container {
                            position: relative;
                            width: ${size * 0.645}px;
                            height: ${size}px;
                            background-image: linear-gradient(90deg, #00ffb8, #13ce9a);
                            border-radius: ${size / 10}px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                                
                        .badge-icon-container:before,
                        .badge-icon-container:after {
                            content: '';
                            display: block;
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: inherit;
                            height: inherit;
                            border-radius: inherit;
                            background-image: inherit;
                        }
                            
                        .badge-icon-container:before {
                            transform: rotate(60deg);
                        }
                        
                        .badge-icon-container:after {
                            transform: rotate(-60deg);
                        }
                    `}
                </style>
            </div>
    )
}