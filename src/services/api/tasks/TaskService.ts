import { ApiException } from "../ApiException";
import { Api } from "../ApiConfig";

export interface ITask {
  age: number, 
  genre: string, 
  movie_or_series: string, 
  time_to_spend: number, 
  platforms: string, 
  year: number
}

const getAll = async (dataTask: ITask): Promise<ITask | ApiException> => {
  try {
    const { data } = await Api().get(`/pickMe/${dataTask}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

export const TaskService = {
  getAll,
};