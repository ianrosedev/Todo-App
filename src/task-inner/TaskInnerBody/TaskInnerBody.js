import React from 'react';
import './TaskInnerBody.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskInnerBody = () => (
  <div>
    <Segment.Group id='task-inner-body'>
      <Segment>
        <Icon name='sticky note outline' />
        <strong>Notes</strong>
        <Button
          basic
          floated='right'
          color='green'
          content='Add Note'
          icon='plus'
          labelPosition='left'
        />
      </Segment>
        <Segment.Group>
          <Segment>
            <strong>Note 1</strong>
            <Icon name='edit' />
            <Icon name='remove' />
            <hr />
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.
            </p>
          </Segment>
          <Segment>
            <strong>Note 2</strong>
            <Icon name='edit' />
            <Icon name='remove' />
            <hr />
            <p>
              Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.
            </p>
          </Segment>
          <Segment>
            <strong>Note 3</strong>
            <Icon name='edit' />
            <Icon name='remove' />
            <hr />
            <p>
              Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.
            </p>
          </Segment>
      </Segment.Group>
    </Segment.Group>
    <Segment.Group id='task-inner-body'>
      <Segment>
        <Icon name='computer' />
        <strong>Websites</strong>
        <Button
          basic
          floated='right'
          color='green'
          content='Add Website'
          icon='plus'
          labelPosition='left'
        />
      </Segment>
        <Segment.Group>
          <Segment>
            <Icon name='edit' />
            <Icon name='remove' />
            <hr />
            <div>
              <a href='http://www.google.com' target='_blank'>
                Google
              </a>
              <p>Google is a good website to find info about anything.</p>
            </div>
          </Segment>
          <Segment>
            <Icon name='edit' />
            <Icon name='remove' />
            <hr />
            <div>
              <a href='http://www.github.com' target='_blank'>
                Github
              </a>
              <p>Github is a place to store code from your project.</p>
            </div>
          </Segment>
          <Segment>
            <Icon name='edit' />
            <Icon name='remove' />
            <hr />
            <div>
              <a href='https://jsfiddle.net/' target='_blank'>
                JSFiddle
              </a>
              <p>JSFiddle is fun to play with code that you working on.</p>
            </div>
        </Segment>
      </Segment.Group>
    </Segment.Group>
  </div>
);

export default TaskInnerBody;
