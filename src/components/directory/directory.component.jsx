import React from "react";

// stylesheet
import "./directory.styles.scss";

// custom component
import MenuItem from "../menu-item/menu-item.component";
import SECTION_DATA from "./section-data";

// class based component
class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: SECTION_DATA,
		};
	}

	// render homepage component
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
