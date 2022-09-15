import './css/Context.less'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
export default (props) => {
  const {title, list, children} = {...props}
  return (
    <div className="Container">
      <h3>{title}</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <img src={item.src} />
            <div>
              <p>{item.detailed}</p>
              <small>
                <span>{item.author} ·</span>
                <span> {item.title} ·</span>
                <span>
                  <ThumbUpOffAltIcon
                    sx={{fontSize: '16px', color: 'rgb(86, 86, 86)'}}
                  />
                  {item.praise}
                </span>
                <span>
                  <ChatBubbleOutlineIcon
                    sx={{fontSize: '16px', color: 'rgb(86, 86, 86)'}}
                  />
                  {item.comment}
                </span>
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
