
    const imported = await import('./src/app.js');
    const app = imported.default || imported;
    const server = app.listen(4004, async () => {
      try {
        const resHealth = await fetch('http://localhost:4004/health');
        const resMain = await fetch('http://localhost:4004/basico/ejercicio-04');
        const jsonHealth = await resHealth.json();
        const jsonMain = await resMain.json();
        if (jsonHealth.ok && jsonMain.ok && jsonMain.topic === 'modulos ES Modules') {
          console.log('Test OK: /health y /basico/ejercicio-04 respondieron correctamente.');
        } else {
          console.error('Test fallido:', jsonMain);
          process.exitCode = 1;
        }
      } catch (err) {
        console.error('Error durante test:', err);
        process.exitCode = 1;
      } finally {
        server.close();
      }
    });
  