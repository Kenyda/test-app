import {FACTS} from "../utils/texts";
import {IPost} from "../utils/types";
import {getDelayValue} from "../utils/getDelayValue";

export default class PostsAPI {
    static async list() {
        return await new Promise<IPost[]>((resolve) => {
            setTimeout(() => {
                resolve(FACTS);
            }, getDelayValue())
        });
    }
    static async get(id: number) {
        return await new Promise<IPost>((resolve) => {
            setTimeout(() => {
                let post = FACTS.filter(fact => fact.id === id)[0]
                resolve(post);
            }, getDelayValue())
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
                resolve(newPost)
            }, getDelayValue())
        });
    }
}