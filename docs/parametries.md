# laptop (root)

| param   | values  | describe |
| ------- | ------- | -------- |
| width   | 1235px  |          |
| heigh   | 700px   |          |
| color   | #0079BF |          |
| padding | 0       |          |

## header (parent laptop)

| param   | values     | describe |
| ------- | ---------- | -------- |
| width   | 1235px     |          |
| heigh   | 55px       |          |
| angle   | 0 deg      |          |
| opacity | 1          |          |
| color   | #0067A3    |          |
| marging | 0 0 auto 0 |          |

### title (parent header)

| param        | values | describe |
| ------------ | ------ | -------- |
| width        | HUG    |          |
| heigh        | 45px   |          |
| angle        | 0 deg  |          |
| opacity      | 1      |          |
| marging-left | 14px   |          |
| vertical     | middle |          |

#### title-text (parent title)

| param          | values               | describe |
| -------------- | -------------------- | -------- |
| content        | Awesome Kanban Board |          |
| font-family    | Roboto               |          |
| font-weight    | 400                  |          |
| font-size      | 28px                 |          |
| color          | #FFFFFF              |          |
| leading-trim   | NONE                 |          |
| line-height    | 100%                 |          |
| letter-spacing | 0%                   |          |

### user-menu (parent header)

| param    | values            | describe |
| -------- | ----------------- | -------- |
| width    | 64px              |          |
| heigh    | 40px              |          |
| angle    | 0 deg             |          |
| opacity  | 1                 |          |
| color    | #0079BF           |          |
| marging  | 7px 16px 8px auto |          |
| vertical | middle            |          |

#### user-ellipce (parent user-menu)

| param        | values     | describe |
| ------------ | ---------- | -------- |
| width        | 40px       |          |
| heigh        | 40px       |          |
| angle        | 0 deg      |          |
| opacity      | 1          |          |
| marging      | 0 auto 0 0 |          |
| border-width | 2px solid  |          |
| color border | #FFFFFF    |          |
| background   | #FFFFFF    |          |

##### user-avatar (parent user-ellipce)

| param          | values                    | describe |
| -------------- | ------------------------- | -------- |
| path           | /docs/img/user-avatar.svg |          |
| marging-bottom | 0                         |          |
| horisontal     | cetner                    |          |

##### arrow-block (parent user-menu)

| param   | values | describe |
| ------- | ------ | -------- |
| width   | 24px   |          |
| heigh   | 24px   |          |
| marging | 8px 0  |          |

###### arrow-down (parent arrow-block)

| param      | values  | describe |
| ---------- | ------- | -------- |
| width      | 12px    |          |
| heigh      | 7.42px  |          |
| vertical   | middle  |          |
| horizontal | center  |          |
| background | #FFFFFF |          |

## footer (parent laptop)

| param   | values     | describe |
| ------- | ---------- | -------- |
| width   | 1235px     |          |
| heigh   | 55px       |          |
| angle   | 0 deg      |          |
| opacity | 1          |          |
| color   | #0067A3    |          |
| marging | auto 0 0 0 |          |

### status (parent footer) - ul (в строку два элемента)

| param        | values | describe |
| ------------ | ------ | -------- |
| width        | HUG    |          |
| heigh        | 21px   |          |
| angle        | 0 deg  |          |
| opacity      | 1      |          |
| marging-left | 21px   |          |
| vertical     | middle |          |
| gap          | 36px   |          |

#### active-tasks (parent status) - li

| param          | values            | describe |
| -------------- | ----------------- | -------- |
| content        | Active tasks: <N> |          |
| font-family    | Roboto            |          |
| font-weight    | 400               |          |
| font-size      | 18px              |          |
| color          | #FFFFFF           |          |
| leading-trim   | NONE              |          |
| line-height    | 100%              |          |
| letter-spacing | 0%                |          |

#### finished-tasks (parent status) - li

| param          | values              | describe |
| -------------- | ------------------- | -------- |
| content        | Finished tasks: <M> |          |
| font-family    | Roboto              |          |
| font-weight    | 400                 |          |
| font-size      | 18px                |          |
| color          | #FFFFFF             |          |
| leading-trim   | NONE                |          |
| line-height    | 100%                |          |
| letter-spacing | 0%                  |          |

### owner-board (parent footer)

| param         | values                         | describe |
| ------------- | ------------------------------ | -------- |
| width         | HUG                            |          |
| heigh         | 21px                           |          |
| angle         | 0 deg                          |          |
| opacity       | 1                              |          |
| marging-right | 19px                           |          |
| vertical      | middle                         |          |
| content       | Kanban board by <NAME>, <YEAR> |          |

## main (parent laptop)

| param | values  | describe |
| ----- | ------- | -------- |
| width | 100%    |          |
| heigh | 200px   |          |
| color | #0079BF |          |

# mob

| param   | values  | describe |
| ------- | ------- | -------- |
| width   | 338px   |          |
| heigh   | 1226px  |          |
| color   | #0079BF |          |
| angle   | 0 deg   |          |
| opacity | 1       |          |

## main-content (parent main)

| param  | values              | describe |
| ------ | ------------------- | -------- |
| width  | 1200px              |          |
| margin | 20px 16px auto 19px |          |
| gap    | 24px                | flex ?   |

### list (parent main) - 4 штуки горизонтальное

| param         | values     | describe |
| ------------- | ---------- | -------- |
| width         | 282px      |          |
| margin        | 0 0 auto 0 |          |
| gap           | 15px       |          |
| angle         | 0 deg      |          |
| opacity       | 1          |          |
| border-radius | 10px       |          |
| color         | #EBECF0    |          |

#### list-title (parent list)

| param              | values              | describe |
| ------------------ | ------------------- | -------- |
| width              | 100%                |          |
| height             | 17px                |          |
| margin             | 12px 12px auto 12px |          |
| angle              | 0 deg               |          |
| opacity            | 1                   |          |
| font-family        | Roboto              |          |
| font-weight        | 400                 |          |
| eading-trim        | NONE                |          |
| font-size          | 18px                |          |
| line-height        | 100%                |          |
| letter-spacing     | 0%                  |          |
| text-align         | left                |          |
| color              | #000000             |          |
| content list-title | Backlog             | list 1   |
| content list-title | Ready               | list 2   |
| content list-title | in Progress         | list 3   |
| content list-title | Finished            | list 4   |

#### list-items (parent list)

| param  | values | describe |
| ------ | ------ | -------- |
| width  | 258px  |          |
| height | Hug    |          |
| margin | 0 12px |          |
| gap    | 15px   |          |

##### list-item (parent list-items)

| param         | values          | describe |
| ------------- | --------------- | -------- |
| width         | 258px           |          |
| height        | Hug             |          |
| border-radius | 5px             |          |
| color         | #FFFFFF         |          |
| padding       | 7px 9px 7px 8px |          |

###### text-item (parent list-item)

| param              | values                          | describe   |
| ------------------ | ------------------------------- | ---------- |
| font-family        | Roboto                          |            |
| font-weight        | 400                             |            |
| eading-trim        | NONE                            |            |
| font-size          | 18px                            |            |
| line-height        | 100%                            |            |
| letter-spacing     | 0%                              |            |
| text-align         | left                            |            |
| color              | #000000                         |            |
| content list-title | Login page – performance issues | переменная |

#### list-footer (parent list)

| param   | values             | describe |
| ------- | ------------------ | -------- |
| width   | 100%               |          |
| height  | 21px               |          |
| margin  | 17px 20px 8px 20px |          |
| angle   | 0 deg              |          |
| opacity | 1                  |          |
| gap     | 3px                |          |

##### cross (parent list-footer)

| param       | values               | describe |
| ----------- | -------------------- | -------- |
| width       | 14px                 |          |
| height      | 14px                 |          |
| margin-left | 0                    |          |
| vertical    | medium               |          |
| angle       | 0 deg                |          |
| opacity     | 1                    |          |
| gap         | 3px                  |          |
| path        | public/img/cross.svg |          |

##### text (parent list-footer)

| param              | values   | describe   |
| ------------------ | -------- | ---------- |
| font-family        | Roboto   |            |
| font-weight        | 400      |            |
| eading-trim        | NONE     |            |
| font-size          | 18px     |            |
| line-height        | 100%     |            |
| letter-spacing     | 0%       |            |
| text-align         | left     |            |
| color              | #5E6C84  |            |
| content list-title | Add card | list 1,3,4 |

## Вот эскиз нового поля для добавления задачи

## | ****************\_\_**************** |
