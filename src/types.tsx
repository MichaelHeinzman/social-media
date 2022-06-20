type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
  posts: Array<string>;
  conversations: Array<string>;
};

const userTemplate: User = {
  id: "1234567",
  name: "SethHeinzman",
  username: "GroverGang",
  email: "Seth@Heinzman.net",
  posts: ["1"],
  conversations: [],
  picture:
    "https://scontent.ftpa1-2.fna.fbcdn.net/v/t39.30808-6/271630790_4918554391546812_8366299066619182112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1w1Mjmq9kC4AX855ewI&_nc_ht=scontent.ftpa1-2.fna&oh=00_AT_WqM9BVsaJc8PEPsMWG6L9YenxXtilEc1RfYNzxfPCfA&oe=62B6541F",
};

type Comment = {
  id: string;
  text: string;
  replies: Array<Comment>;
};

type Post = {
  id: string;
  description: string;
  images: Array<string>;
  likes: number;
  comments: Array<Comment>;
};

const userPost: Post = {
  id: "1",
  description: "This is a post clone",
  images: [
    "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.18169-9/20431477_1566202116735871_3435143156591963955_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ysrJLh1oYloAX9eHGGC&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT-U-KasHe53PfDq7jccmiU2cimVvw1EWqLg4LfIZI-ivw&oe=62D51E00",
  ],
  likes: 35,
  comments: [
    {
      id: "1",
      text: "This is a comment",
      replies: [
        { id: "2", text: "This is a reply to first comment", replies: [] },
      ],
    },
  ],
};

type Posts = Array<Post>;
const userPosts: Posts = [userPost, userPost, userPost, userPost, userPost];

type APIPosts = any;
const apiPosts: APIPosts = {
  "1": userPost,
  "2": userPost,
  "3": userPost,
  "4": userPost,
  "5": userPost,
  "6": userPost,
  "7": userPost,
  "8": userPost,
};

export { userTemplate, userPost, userPosts, apiPosts };
export type { User, Post, Comment };
