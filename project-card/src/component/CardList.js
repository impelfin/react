import { Card, Image } from 'semantic-ui-react'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const CardExampleCard = (props) => (
  <Card key={props.EVENT_CODE}>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Meta>
        <span className='category'>{props.EVENT_CATEGORY}</span>
      </Card.Meta>
      <Card.Header>
        <span className='name'>{props.EVENT_NAME}</span>
      </Card.Header>
      <Card.Meta>
        <span className='place'>{props.EVENT_PLACE}</span>
      </Card.Meta>
      <Card.Description>
        <span className='date'>{(props.EVENT_BEGIN_DATE).substr(0,10)} ~ {(props.EVENT_END_DATE).substr(0,10)}</span>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <span className='views'>{props.VIEWS}</span>
     <span className='downloads'>{props.DOWNLOADS}</span>
    </Card.Content>
  </Card>
)

export default CardExampleCard