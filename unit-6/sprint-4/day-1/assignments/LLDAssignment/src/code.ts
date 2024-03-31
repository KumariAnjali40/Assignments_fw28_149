export enum DatabaseModel {
  users = "users",
  posts = "posts",
  comments = "comments",
  likes = "likes",
}




type DatabaseMaping =
  | {
      model: DatabaseModel.users;
      type: IUser;
    }
  | {
      model: DatabaseModel.posts;
      type: IPost;
    }
  | {
      model: DatabaseModel.comments;
      type: IComments;
    }
  | {
      model: DatabaseModel.likes;
      type: ILikes;
    };
interface IModel {
  model: DatabaseModel;
  id: number;
}
export abstract class Model implements IModel {
  model: DatabaseModel;
  id: number;
  constructor(model: DatabaseModel) {
    this.model = model;
    this.id = Math.random();
  }
}
interface IUser extends IModel {
  name: string;
  bio: string;
  email: string;
  follows: number[];
}
export class User extends Model implements IUser {
  name: string;
  bio: string;
  email: string;
  follows: number[];
  constructor(name: string, bio: string, email: string) {
    super(DatabaseModel.users);
    this.name = name;
    this.bio = bio;
    this.email = email;
    this.follows = [];
    Database.Instance?.create({ model: DatabaseModel.users, type: this });
  }
  follow(user_id: number) {
    this.follows.push(user_id);
  }
  get followers() {
    let users = Database.Instance?.Users;
    users = users?.filter((item) => {
      return item.follows.includes(this.id);
    });
    return users?.length;
  }
  get posts() {
    return Database.Instance?.Posts.filter((item) => {
      return item.id == this.id;
    });
  }
  createPost(image: string, content: string) {
    let post = new Post(image, content, this.id);
    Database.Instance?.create({ model: DatabaseModel.posts, type: post });
    return post;
  }
}
interface IPost extends IModel {
  image: string;
  content: string;
  user_id: number;
}
export class Post extends Model implements IPost {
  image: string;
  content: string;
  user_id: number;
  constructor(image: string, content: string, user_id: number) {
    super(DatabaseModel.posts);
    this.image = image;
    this.content = content;
    this.user_id = user_id;
  }
  get likes() {
    let likes = Database.Instance?.Likes;
    likes = likes?.filter((item) => {
      return item.parentID == this.id;
    });
    return likes?.length;
  }
  Like(user_id: number) {
    let like = new Like("POST", user_id, this.id);
    Database.Instance?.create({ model: DatabaseModel.likes, type: like });
  }
  get comments() {
    let comments = Database.Instance?.Comments;
    comments = comments?.filter((item) => {
      return item.postID == this.id;
    });
    return comments;
  }
  Comment(user_id: number) {
    let comment = new Comment(this.content, user_id, this.id);
    Database.Instance?.create({ model: DatabaseModel.comments, type: comment });
    return comment;
  }
}
interface IComments extends IModel {
  content: string;
  user_id: number;
  postID: number;
}
export class Comment extends Model implements IComments {
  content: string;
  user_id: number;
  postID: number;
  constructor(content: string, user_id: number, postID: number) {
    super(DatabaseModel.comments);
    this.content = content;
    this.user_id = user_id;
    this.postID = postID;
  }
  get likes() {
    let likes = Database.Instance?.Likes;
    likes = likes?.filter((item) => {
      return item.parentID == this.id;
    });
    return likes?.length;
  }
  Like(user_id: number) {
    let like = new Like("COMMENT", user_id, this.id);
    Database.Instance?.create({ model: DatabaseModel.likes, type: like });
  }
}

interface ILikes extends IModel {
  type: "POST" | "COMMENT";
  user_id: number;
  parentID: number;
}

export class Like extends Model implements ILikes {
  type: "POST" | "COMMENT";
  user_id: number;
  parentID: number;
  constructor(type: "POST" | "COMMENT", user_id: number, parentID: number) {
    super(DatabaseModel.likes);
    this.type = type;
    this.user_id = user_id;
    this.parentID = parentID;
  }
}

export class Database {
  private users: IUser[];
  private posts: IPost[];
  private comments: IComments[];
  private likes: ILikes[];
  static Instance: Database | null = null;

  public constructor() {
    this.users = [];
    this.posts = [];
    this.comments = [];
    this.likes = [];
  }
  static connect() {
    if (Database.Instance == null) {
      Database.Instance = new Database();
    }
    return Database.Instance;
  }
  get Users() {
    return this.users;
  }
  get Posts() {
    return this.posts;
  }
  get Comments() {
    return this.comments;
  }
  get Likes() {
    return this.likes;
  }
  create({ model, type }: DatabaseMaping) {
    const database = Database.connect();
    switch (model) {
      case "users":
        this.users.push(type);
        break;
      case "posts":
        this.posts.push(type);
        break;
    }
  }
  upsert() {}
}