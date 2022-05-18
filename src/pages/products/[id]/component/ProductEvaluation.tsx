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
  CreatedAt: string;
}
const ProductEvaluation = ({ comment }: any) => {
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
          <Tooltip title={moment(item.CreatedAt).format('YYYY-MM-DD HH:MM:SS')}>
            <span>{moment(item.CreatedAt).format('YYYY-MM-DD HH:MM:SS')}</span>
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
export default ProductEvaluation;
