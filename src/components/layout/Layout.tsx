interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className="bg-bg min-h-screen">
            <main className="max-w-6xl mx-auto p-4 xl:p-6">{children}</main>
        </div>
    );
};
