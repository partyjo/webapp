import React from 'react'

export default props => (
  <div>
		<div>header</div>
		<div>{props.children}</div>
		<div>footer</div>
	</div>
)