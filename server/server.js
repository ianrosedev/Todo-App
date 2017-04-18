import express from 'express';
import bodyParser from 'body-parser';
import uuidV4 from 'uuid/v4';

const app = express();

let ID_NUMBER = 0;

const FAKE_DATA = {
  USER_ID: ID_NUMBER++,
  USER_INFO: {
    USER_NAME: 'Elliot',
    IMAGE: 'http://placekitten.com/209/209',
    JOINED: 2017,
    SAYING: 'Do or do not, there is no try.'
  },
  TASK_LIST: [
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 1',
      IMPORTANCE: {
        COLOR: 'black',
        LEVEL: 0
      },
      ISSUES: [
          {
            TASK_ID: ID_NUMBER++,
            name: 'Issues',
            icon: 'exclamation circle'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'TEST ONE',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'Issue 2',
            body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
          }
        ],
      QUESTIONS: [
          {
            TASK_ID: ID_NUMBER++,
            name: 'Questions',
            icon: 'question circle outline'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'Question 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'Question 2',
            body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
          }
        ],
      NOTES: [
          {
            TASK_ID: ID_NUMBER++,
            name: 'Notes',
            icon: 'sticky note outline'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'Note 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'Note 2',
            body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'Note 3',
            body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
          }
        ],
      WEBSITES: [
          {
            TASK_ID: ID_NUMBER++,
            name: 'Websites',
            icon: 'computer'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'https://www.google.com',
            body: 'Google is a good website to find info about anything.'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'https://www.github.com',
            body: 'Github is a place to store code from your project.'
          },
          {
            TASK_ID: ID_NUMBER++,
            STATUS: 'OPEN',
            title: 'https://jsfiddle.net',
            body: 'JSFiddle is fun to play with code that you working on.'
          }
        ]
    },
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 2',
      IMPORTANCE: {
        COLOR: 'red',
        LEVEL: 1
      },
      ISSUES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'TEST 2',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Notes',
              icon: 'sticky note outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Note 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Note 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Note 3',
              body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
            }
          ],
      WEBSITES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Websites',
              icon: 'computer'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'https://www.google.com',
              body: 'Google is a good website to find info about anything.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'https://www.github.com',
              body: 'Github is a place to store code from your project.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'https://jsfiddle.net',
              body: 'JSFiddle is fun to play with code that you working on.'
            }
          ]
    },
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 3',
      IMPORTANCE: {
        COLOR: 'green',
        LEVEL: 3
      },
      ISSUES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Notes',
              icon: 'sticky note outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Note 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Note 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Note 3',
              body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
            }
          ],
      WEBSITES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Websites',
              icon: 'computer'
            },
            {
              TASK_ID: ID_NUMBER++,
              title: 'https://www.google.com',
              body: 'Google is a good website to find info about anything.'
            },
            {
              TASK_ID: ID_NUMBER++,
              title: 'https://www.github.com',
              body: 'Github is a place to store code from your project.'
            },
            {
              TASK_ID: ID_NUMBER++,
              title: 'https://jsfiddle.net',
              body: 'JSFiddle is fun to play with code that you working on.'
            }
          ]
    },
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 4',
      IMPORTANCE: {
        COLOR: 'blue',
        LEVEL: 4
      },
      ISSUES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Notes',
          icon: 'sticky note outline'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'Note 2',
          body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'Note 3',
          body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
        }
      ],
      WEBSITES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Websites',
          icon: 'computer'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'https://www.google.com',
          body: 'Google is a good website to find info about anything.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'https://www.github.com',
          body: 'Github is a place to store code from your project.'
        }
      ]
    },
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 5',
      IMPORTANCE: {
        COLOR: 'black',
        LEVEL: 0
      },
      ISSUES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Notes',
          icon: 'sticky note outline'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 2',
          body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 3',
          body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
        }
      ],
      WEBSITES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Websites',
          icon: 'computer'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'https://www.google.com',
          body: 'Google is a good website to find info about anything.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'https://www.github.com',
          body: 'Github is a place to store code from your project.'
        }
      ]
    },
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 6',
      IMPORTANCE: {
        COLOR: 'orange',
        LEVEL: 2
      },
      ISSUES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'COMPLETED',
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Notes',
          icon: 'sticky note outline'
        },
        {
          TASK_ID: ID_NUMBER++,
          title: 'Note 1',
          STATUS: 'COMPLETED',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'Note 2',
          body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'Note 3',
          body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
        }
      ],
      WEBSITES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Websites',
          icon: 'computer'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'https://www.google.com',
          body: 'Google is a good website to find info about anything.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'COMPLETED',
          title: 'https://www.github.com',
          body: 'Github is a place to store code from your project.'
        }
      ]
    },
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: 'Task 7',
      IMPORTANCE: {
        COLOR: 'orange',
        LEVEL: 2
      },
      ISSUES: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Issues',
              icon: 'exclamation circle'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Issue 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.'
            }
          ],
      QUESTIONS: [
            {
              TASK_ID: ID_NUMBER++,
              name: 'Questions',
              icon: 'question circle outline'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 1',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.'
            },
            {
              TASK_ID: ID_NUMBER++,
              STATUS: 'OPEN',
              title: 'Question 2',
              body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.'
            }
          ],
      NOTES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Notes',
          icon: 'sticky note outline'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio. Pellentesque sollicitudin, lorem id lobortis euismod, arcu urna elementum est, fringilla vestibulum orci nunc at neque. Quisque mi justo, commodo in erat ut, congue fringilla odio. Aenean egestas augue eget quam dictum, sit amet vulputate sapien cursus. Sed cursus elementum lacus porttitor elementum. Mauris nec aliquet felis. Maecenas arcu est, ornare vel euismod non, varius et ante. Nullam fermentum metus eu lacus posuere suscipit. Curabitur tincidunt ultricies libero ac finibus. In vulputate, leo eu accumsan dictum, nisl augue interdum orci, non cursus dolor neque non sapien. Mauris condimentum nisl vel nisl ullamcorper aliquet. Quisque quis nisl aliquam, tempus metus quis, venenatis diam. Curabitur eleifend mollis erat sit amet dapibus.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 2',
          body: 'Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est. Curabitur nec leo condimentum ex blandit volutpat. Maecenas sollicitudin est nec mattis sodales. Donec molestie laoreet maximus. Duis blandit vestibulum sodales. In blandit, turpis non tincidunt euismod, risus quam placerat mi, id fermentum elit urna quis sapien. Aliquam tempus, diam sit amet iaculis egestas, diam ligula varius purus, sed porta massa tortor sed orci. In eu urna cursus, facilisis nibh non, molestie metus. Maecenas aliquet eleifend tortor, a ullamcorper massa interdum sed. Etiam tincidunt accumsan justo, id placerat metus ultrices eget.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'Note 3',
          body: 'Sed pharetra turpis eget metus gravida, ut eleifend ex sodales. Etiam non eros ut neque scelerisque euismod eget id lectus. Fusce sit amet elit laoreet, rhoncus leo et, porttitor libero. Nullam eu varius ligula. Vestibulum consequat nec risus eu finibus. Nulla in semper arcu. Suspendisse erat quam, suscipit eu aliquam eu, venenatis in quam. Vestibulum vitae lacus a diam commodo mattis nec eu lorem. Pellentesque efficitur velit eget lorem tincidunt, eu sodales purus finibus. Cras sed felis elit.'
        }
      ],
      WEBSITES: [
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          name: 'Websites',
          icon: 'computer'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'https://www.google.com',
          body: 'Google is a good website to find info about anything.'
        },
        {
          TASK_ID: ID_NUMBER++,
          STATUS: 'OPEN',
          title: 'https://www.github.com',
          body: 'Github is a place to store code from your project.'
        }
      ]
    }
  ]
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/data', (req, res) => {
  res.json(FAKE_DATA);
});

app.post('/data/form/new', (req, res) => {
  FAKE_DATA.TASK_LIST = [
    ...FAKE_DATA.TASK_LIST,
    {
      TASK_ID: ID_NUMBER++,
      TASK_NAME: req.body.taskTitle,
      IMPORTANCE: {
        COLOR: req.body.taskImportance.color,
        LEVEL: req.body.taskImportance.level
      },
      ISSUES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Issues',
          icon: 'exclamation circle'
        }
      ],
      QUESTIONS: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Questions',
          icon: 'question circle outline'
        }
      ],
      NOTES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Notes',
          icon: 'sticky note outline'
        }
      ],
      WEBSITES: [
        {
          TASK_ID: ID_NUMBER++,
          name: 'Websites',
          icon: 'computer'
        }
      ]
    }
  ]

  res.json(FAKE_DATA);
});

app.post('/data/form/sub', (req, res) => {
  const matchedItem = FAKE_DATA.TASK_LIST.findIndex((item) => (
    item.TASK_ID === req.body.id
  ));

  FAKE_DATA.TASK_LIST[matchedItem][req.body.name].push({
    TASK_ID: ID_NUMBER++,
    STATUS: 'OPEN',
    title: req.body.taskTitle,
    body: req.body.taskBody
  });

  res.send(FAKE_DATA);
})

app.put('/data/importance/:id/:color/:level', (req, res) => {
  const matchedItem = FAKE_DATA.TASK_LIST.findIndex((item) => (
    item.TASK_ID === Number(req.params.id)
  ));

  FAKE_DATA.TASK_LIST[matchedItem].IMPORTANCE = {
    COLOR: req.params.color,
    LEVEL: req.params.level
  }

  res.json(FAKE_DATA);
});

app.put('/data/form/edit/main', (req, res) => {
  const matchedItemIndex = FAKE_DATA.TASK_LIST.findIndex((item) => (
    item.TASK_ID === req.body.id
  ));

  const matchedTask = FAKE_DATA.TASK_LIST[matchedItemIndex];

  matchedTask.TASK_NAME = req.body.taskTitle;
  matchedTask.IMPORTANCE.COLOR = req.body.taskImportance.color;
  matchedTask.IMPORTANCE.LEVEL = req.body.taskImportance.level;

  res.json(FAKE_DATA);
});

app.put('/data/form/edit/sub', (req, res) => {
  const matchedItemIndex = FAKE_DATA.TASK_LIST.findIndex((item) => (
    item.TASK_ID === req.body.id
  ));

  const matchedItemSubIndex = FAKE_DATA.TASK_LIST[matchedItemIndex]
                              [req.body.taskTitle]
                              .findIndex((task) => (
                                task.TASK_ID === req.body.subId
                              ));

  const matchedTask = FAKE_DATA.TASK_LIST[matchedItemIndex][req.body.taskTitle][matchedItemSubIndex];

  matchedTask.title = req.body.title;
  matchedTask.body = req.body.body;

  res.json(FAKE_DATA);
});

app.delete('/data/:id', (req, res) => {
  FAKE_DATA.TASK_LIST.splice(
    FAKE_DATA.TASK_LIST.findIndex((item) => (
      item.TASK_ID === Number(req.params.id)),
    ), 1
  );

  res.json(FAKE_DATA);
});

app.delete('/data/:id/:taskType/:subId', (req, res) => {
  const matchedItemIndex = FAKE_DATA.TASK_LIST.findIndex((item) => (
    item.TASK_ID === Number(req.params.id)
  ));

  const matchedSubItemIndex =
    FAKE_DATA.TASK_LIST[matchedItemIndex][req.params.taskType].findIndex((item) => (
      item.TASK_ID === Number(req.params.subId)
  ));

  FAKE_DATA.TASK_LIST[matchedItemIndex][req.params.taskType].splice(
    matchedSubItemIndex, 1
  );

  res.json(FAKE_DATA);
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
