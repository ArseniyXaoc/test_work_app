interface IReviewAnswer {
    author: {
        name: string;
        initials: string;
    };
    created_at: string;
    updated_at: string;
    text: string;
    likes: number;
    dislikes: number;
}

interface IReviewPhotos {
    url_large: string;
    url_original: string;
    url_small: string;
    url_thumb: string;

}

interface IReview {
    name: string;
    avatar: string;
    avatar_url: string;
    location: string;
    score: number;
    detailsOption: {
        value: string;
        name: string;
        label: string;
    }[];
    date: string;
    text: string;
    photos: IReviewPhotos[];
    like: number;
    dislike: number;
    source: string;
    rating_details: {
        value: number;
        name: string;
        label: string;
    }[];
    answer: IReviewAnswer[];
}

interface IProduct {
    rating: number;
    reviews_count: number;
    rating_details: [];
    review_photos: [];
    [key: string]: number | string | [];
  }

export type { IReviewAnswer, IReviewPhotos, IReview, IProduct }