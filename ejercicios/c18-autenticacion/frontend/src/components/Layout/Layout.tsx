import type { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
    children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <Header />
            <Container className="py-4"> 
                {children} 
            </Container>
            <Footer />
        </div>
    );
}