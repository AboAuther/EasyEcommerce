import { Comment, Tooltip, List, Rate } from 'antd';
import { ItemRender } from 'antd/lib/upload/interface';
import moment from 'moment';
import { comment } from '../mock';

const CommodityEvaluation = () => {
  const data = comment.map(item => ({
    author: item.useName,
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <div>
        <p>{item.content}</p>
        <Rate defaultValue={item.rate} disabled={true} />
      </div>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(item.time, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(item.time, 'days').fromNow()}</span>
      </Tooltip>
    ),
  }));
  // const data = [
  //   {
  //     author: '曹慧珺',
  //     avatar: 'https://joeschmoe.io/api/v1/random',
  //     content: <p>这个胡萝卜量很足，味道很新鲜，很推荐</p>,
  //     datetime: (
  //       <Tooltip
  //         title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
  //         <span>{moment().subtract(1, 'days').fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  //   {
  //     author: '曹哈哈',
  //     avatar: 'https://joeschmoe.io/api/v1/random',
  //     content: <p>下次还会购买的，很实惠</p>,
  //     datetime: (
  //       <Tooltip
  //         title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
  //         <span>{moment().subtract(2, 'days').fromNow()}</span>
  //       </Tooltip>
  //     ),
  //   },
  // ];
  return (
    <div>
      <List
        className="comment-list"
        header={`${data.length} 条评论`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </div>
  );
};
export default CommodityEvaluation;
