import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return res.status(400).json({ message: 'Validation fails', errors });
    }

    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;