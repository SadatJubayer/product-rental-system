import classNames from 'classnames';

interface IAlert {
    message: string;
    type: 'error' | 'info';
}

export const Alert = ({ message, type }: IAlert) => {
    const styles = classNames('text-center rounded p-5', {
        'bg-red-200 text-red-800': type === 'error',
    });

    return <p className={styles}>{message}</p>;
};
