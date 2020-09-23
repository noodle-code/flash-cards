import React from 'react';
import {
	Section,
	Container,
	Box,
	Columns,
	Menu
} from 'react-bulma-components';
import './styles.css';

const Home = () => (
	<div>
		<Section>
			<Container>
				<Columns>
	        <Columns.Column size="half" offset="one-quarter">
	        	<Box>
	        		<Container>
	        			<Columns>
	        				<Columns.Column>
	        					<p className="bd-notification is-success">
	        						One
	        					</p>
	        				</Columns.Column>
	        				<Columns.Column>
	        					<p className="bd-notification is-info">
	        						One
	        					</p>
	        				</Columns.Column>
	        			</Columns>
	        		</Container>
	        	</Box>
	        </Columns.Column>
	      </Columns>
			</Container>
			<Container>
				<Columns>
	        <Columns.Column size="half" offset="one-quarter">
	          <Box>
	          	<Menu>
					      <Menu.List title="Deck Sessions">
					        <Menu.List.Item>
					          Dashboard
					        </Menu.List.Item>
					        <Menu.List.Item>
					          Customer
					        </Menu.List.Item>
					      </Menu.List>
				      </Menu>
	          </Box>
	        </Columns.Column>
	      </Columns>
			</Container>
		</Section>
	</div>
);

export default Home;