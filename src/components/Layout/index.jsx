import React, { useState } from "react";
import LR from "./LR";
import TLR from "./TLR";
import styles from "./index.less";
import { layoutCaculator, throttle } from "utils/index";

// export default class Layout extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             layoutStyle: layoutCaculator(),
//         };
//     }

//     componentDidMount () {
//         const evt = "onorientationchange" in window ? "orientationchange" : "resize";
//         window.addEventListener(evt, throttle(this.layoutStyleHandler, 300), false);
//     }

//     layoutStyleHandler = () => {
//         const layoutStyle = layoutCaculator();
//         this.setState({ layoutStyle });
//     };

//     render () {
//         const { layoutStyle } = this.state;
//         const { leftContent = null, rightContent = null } = this.props;

//         return (
//             <div className={styles.layout}>
//                 {layoutStyle === "1" ? <LR /> : <TLR leftContent={leftContent} rightContent={rightContent} />}
//             </div>
//         );
//     }
// }

export default function Layout(props) {
	const [layoutStyle, setLayoutStyle] = useState(layoutCaculator());
	const layoutStyleHandler = () => {
		setLayoutStyle(layoutCaculator());
	};

	const evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, throttle(layoutStyleHandler, 300), false);

	return <div className={styles.layout}>{layoutStyle === "1" ? <LR {...props} /> : <TLR {...props} />}</div>;
}
