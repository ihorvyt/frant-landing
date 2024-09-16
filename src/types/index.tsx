interface IModel {
    modelName: string;
}

export interface IServiceProps {
    showModel: IModel;
    setIsLoading: (b: boolean) => void;
}