interface IImage{
  smallThumbnail: string;
}

interface IVolumeInfo{
  title: string;
  imageLinks: IImage;
  categories: string[];
  authors: [] | string;
  description: string;
}

export interface IBooks{
  id: string;
  volumeInfo: IVolumeInfo;
}

type Status = 'loading' | 'idle' | 'error'

export interface booksState {
  setBooks: IBooks[];
  error: any;
  totalItems: number;
  status: Status;
  startIndex: number;
}