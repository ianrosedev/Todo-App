import express from 'express';
import bodyParser from 'body-parser';
import uuidV4 from 'uuid/v4';

const app = express();

const FAKE_DATA = {
  USER_ID: 1001,
  USER_INFO: {
    USER_NAME: 'Elliot',
    IMAGE: 'http://placekitten.com/209/209',
    JOINED: 2017,
    SAYING: 'Do or do not, there is no try.'
  },
  TASK_LIST: [
    {
      TASK_ID: 2001,
      TASK_NAME: 'Task 1',
      COLOR: 'black',
      ISSUES: [
          {
            name: 'Issues',
            icon: 'exclamation circle'
          },
          {
            title: 'TEST ONE',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
          },
          {
            title: 'Issue 2',
            body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
          }
        ],
      QUESTIONS: [
          {
            name: 'Questions',
            icon: 'question circle outline'
          },
          {
            title: 'Question 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
          },
          {
            title: 'Question 2',
            body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
          }
        ],
      NOTES: [
          {
            name: 'Notes',
            icon: 'sticky note outline'
          },
          {
            title: 'Note 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
          },
          {
            title: 'Note 2',
            body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
          },
          {
            title: 'Note 3',
            body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
          }
        ],
      WEBSITES: [
          {
            name: 'Websites',
            icon: 'computer'
          },
          {
            title: 'https://www.google.com',
            body: 'Google is a good website to find info about anything.'
          },
          {
            title: 'https://www.github.com',
            body: 'Github is a place to store code from your project.'
          },
          {
            title: 'https://jsfiddle.net',
            body: 'JSFiddle is fun to play with code that you working on.'
          }
        ]
    },
    {
      TASK_ID: 2002,
      TASK_NAME: 'Task 2',
      COLOR: 'red',
      ISSUES: [
            {
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              title: 'TEST 2',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
            {
              name: 'Notes',
              icon: 'sticky note outline'
            },
            {
              title: 'Note 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
            },
            {
              title: 'Note 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
            },
            {
              title: 'Note 3',
              body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
            }
          ],
      WEBSITES: [
            {
              name: 'Websites',
              icon: 'computer'
            },
            {
              title: 'https://www.google.com',
              body: 'Google is a good website to find info about anything.'
            },
            {
              title: 'https://www.github.com',
              body: 'Github is a place to store code from your project.'
            },
            {
              title: 'https://jsfiddle.net',
              body: 'JSFiddle is fun to play with code that you working on.'
            }
          ]
    },
    {
      TASK_ID: 2003,
      TASK_NAME: 'Task 3',
      COLOR: 'green',
      ISSUES: [
            {
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
            {
              name: 'Notes',
              icon: 'sticky note outline'
            },
            {
              title: 'Note 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
            },
            {
              title: 'Note 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
            },
            {
              title: 'Note 3',
              body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
            }
          ],
      WEBSITES: [
            {
              name: 'Websites',
              icon: 'computer'
            },
            {
              title: 'https://www.google.com',
              body: 'Google is a good website to find info about anything.'
            },
            {
              title: 'https://www.github.com',
              body: 'Github is a place to store code from your project.'
            },
            {
              title: 'https://jsfiddle.net',
              body: 'JSFiddle is fun to play with code that you working on.'
            }
          ]
    },
    {
      TASK_ID: 2004,
      TASK_NAME: 'Task 4',
      COLOR: 'blue',
      ISSUES: [
            {
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
            {
              name: 'Notes',
              icon: 'sticky note outline'
            },
            {
              title: 'Note 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
            },
            {
              title: 'Note 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
            },
            {
              title: 'Note 3',
              body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
            }
          ],
      WEBSITES: [
            {
              name: 'Websites',
              icon: 'computer'
            },
            {
              title: 'https://www.google.com',
              body: 'Google is a good website to find info about anything.'
            },
            {
              title: 'https://www.github.com',
              body: 'Github is a place to store code from your project.'
            },
            {
              title: 'https://jsfiddle.net',
              body: 'JSFiddle is fun to play with code that you working on.'
            }
          ]
    }
  ]
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/data', (req, res) => {
  res.json(FAKE_DATA);
});

app.delete('/data/:id', (req, res) => {
  FAKE_DATA.TASK_LIST.splice(
    FAKE_DATA.TASK_LIST.findIndex((item) =>
      item.TASK_ID === Number(req.params.id),
    ), 1
  );

  res.json(FAKE_DATA);
});

app.post('/form', (req, res) => {
  res.send('form submitted');
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
