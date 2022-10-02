import { UserState } from "./authTypes";


export type ReplyType = {
	_id: string;
	body: string;
	author: UserState;
	likes: [string];
	root: string;
	updatedAt: string;
	createdAt: string;
}
export type CommentType = {
	_id: string;
	body: string;
	author: UserState;
	likes: [string];
	reply: [ReplyType];
	updatedAt: string;
	createdAt: string;
}
export type PostsType = {
    _id:string;
    title:string;
    markdown:string;
    status: 'draft' | 'published';
    author: UserState;
    likes: [string];
    createdAt: string;
    updatedAt: string;
}

export type PostsObjType = {
    title: string;
    markdown:string;
    status:'draft' | 'published';
}
