/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/naming-convention */
import { Comment, Tooltip, List, Rate } from 'antd';
import moment from 'moment';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

interface type {
  createUser: string;
  evaluation:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  star: number | undefined;
  CreatedAt: moment.DurationInputArg1;
}
const CommodityEvaluation = ({ comment }) => {
  const data = comment
    ? comment.map((item: type) => ({
        author: item.createUser,
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: (
          <div>
            <p>{item.evaluation}</p>
            {item.star ? <Rate defaultValue={item.star} disabled={true} /> : ''}
          </div>
        ),
        datetime: (
          <Tooltip title={item.CreatedAt}>
            <span>{item.CreatedAt}</span>
          </Tooltip>
        ),
      }))
    : [];
  return (
    <div>
      {comment ? (
        <List
          className="comment-list"
          header={`${data.length} 条评论`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item: {
            author: string;
            avatar: number;
            content: string;
            datetime: string;
          }) => (
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
      ) : (
        '暂无评价'
      )}
    </div>
  );
};
export default CommodityEvaluation;
