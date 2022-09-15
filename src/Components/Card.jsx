import './css/Card.less'
export default (props) => {
  const {title, small, list, children} = {...props}
  console.log(children)
  return (
    <div className="Card">
      <div className="title">
        <div>
          <h3>{title}</h3>
          <small>{small}</small>
        </div>
        <p>SEE ALL</p>
      </div>
      <div className="list">
        {list.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.src} alt="" />
            <p>
              {item.top ? <span>{item.top}</span> : ''}
              <span>{item.title}</span>
            </p>
            <small>{item.small}</small>
            {children ? (
              <>
                <div className="slot1">{children[0]}</div>
                <div className="slot2">{children[1]}</div>
              </>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
