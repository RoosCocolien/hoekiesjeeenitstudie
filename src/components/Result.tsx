import React from 'react';
import bootcamp from '../images/bootcamp_no_text.png';
import online from '../images/online_no_text.png';
import trad from '../images/trad_no_text.png';
import traineeship from '../images/traineeship_no_text.png';
import alternative from '../images/alternative_no_text.png';

//functional component result
type Props = {
	answerResults: object;
}

const Result: React.FC<Props> = ({answerResults}) => (
	<div className="Result">
		<h1>Resultaat</h1>
		<div className="resultIntroduction">
			<img src={bootcamp} alt="bootcamp icon"/>
			<img src={online} alt="zelfstudie icon"/>
			<img src={trad} alt="traditioneel onderwijs icon"/>
			<img src={traineeship} alt="traineeship icon"/>
			<img src={alternative} alt="alternatief onderwijs icon"/>
			<p>
				33%  76%  35%  22%  13%
			</p>
			<p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
			</p>
			</p>
			<br/>
			<br/>
			<br/>
		</div>
		<div>
			<img src={bootcamp} alt="bootcamp icon"/>
			<h2>Bootcamp</h2>
			<h3>33%</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
				<br/>
				Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
			</p>
		</div>
		<div>
			<img src={online} alt="zelfstudie icon"/>
			<h2>Zelfstudie</h2>
			<h3>76%</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
				<br/>
				Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
			</p>
		</div>
		<div>
			<img src={trad} alt="traditioneel onderwijs icon"/>
			<h2>Traditioneel onderwijs</h2>
			<h3>35%</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
				<br/>
				Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
			</p>
		</div>
		<div>
			<img src={traineeship} alt="traineeship icon"/>
			<h2>Traineeship</h2>
			<h3>22%</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
				<br/>
				Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
			</p>
		</div>
		<div>
			<img src={alternative} alt="alternatief onderwijs icon"/>
			<h2>Alternatief onderwijs</h2>
			<h3>13%</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum ipsum, non malesuada mauris. Proin ut erat sit amet lorem facilisis commodo. Aliquam maximus dui vel nunc bibendum auctor. Curabitur orci mi, dignissim nec rutrum et, pharetra vitae justo. Phasellus cursus elit sollicitudin dui sagittis, id varius odio condimentum. Donec sed tellus non ex auctor rhoncus sit amet vitae sem. Suspendisse blandit nunc dui, sit amet tristique metus pulvinar et.
				<br/>
				Fusce nec magna nulla. Integer non risus nec orci tincidunt finibus at in dolor. Vivamus ullamcorper odio sed commodo venenatis. Morbi venenatis ornare justo quis congue. Praesent id imperdiet velit. Proin consequat tellus ipsum, fermentum lacinia dolor feugiat vitae. Vivamus sagittis quam a mauris dictum, vitae feugiat tellus vestibulum. Sed fermentum commodo velit, a tempor risus rhoncus quis. Nullam congue convallis tortor vestibulum sodales. Ut bibendum nisl at iaculis tincidunt. Quisque leo nulla, maximus non dapibus sit amet, aliquet euismod ex. Donec mi nisi, consectetur a lobortis et, lobortis vel mi. Proin tincidunt sagittis orci non dignissim. Vivamus gravida laoreet tempus. Vestibulum pulvinar nisl non nulla blandit venenatis.
			</p>
		</div>
	</div>
);

export default Result;