import { ProjectProvider } from '../../pages/context/ProjectContext';

export const metadata = {
  title: 'Home - Portifólio Kauã Lusvarghi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ProjectProvider>
        <body>{children}</body>
      </ProjectProvider>
    </html>
  );
}
