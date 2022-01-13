import {FACTS} from "../utils/texts";
import {IPost} from "../pages/Posts";

export default class PostsAPI {
    static async list() {
        return await new Promise<IPost[]>((resolve) => {
            setTimeout(() => {
                resolve(FACTS);
            }, 2000)
        });
    }
    static async get(id: number) {
        return await new Promise<IPost>((resolve) => {
            setTimeout(() => {
                let post = FACTS.filter(fact => fact.id === id)[0]
                resolve(post);
            }, 1000)
        });
    }
    static async create(data: IPost) {
        return await new Promise<IPost>((resolve) => {
            setTimeout(() => {
                const newPost: IPost = {
                    id: FACTS[FACTS.length -1].id + 1,
                    description: data.description,
                    media: data.media,
                };
                FACTS.push(newPost);
                console.log(data)
                resolve(newPost)
            }, 1000)
        });
    }
}