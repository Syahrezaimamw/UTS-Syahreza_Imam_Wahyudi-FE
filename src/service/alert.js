export const handleAlerts = (alerts,setAlerts) => {
    const newAlert = { id: Date.now() }; // unique id for each alert

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    // Menghilangkan alert setelah 1 detik
    setTimeout(() => {
      setAlerts((prevAlerts) =>
        prevAlerts.filter((alert) => alert.id !== newAlert.id)
      );
    }, 3000);
  };