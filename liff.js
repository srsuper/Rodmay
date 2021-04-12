        liff.ready
      .then(() => {
        if (liff.isLoggedIn()) {
          return liff.getProfile();
        } else {
          liff.login({
            redirectUri: "https://script.google.com/macros/s/AKfycbxmScI2wPGEGxg1fad42fDs4Q-3EpxxSxvLkTv8tGoXNNa3B0sdk4BAc9on83EC4GCF/exec",
          });
        }
      })
      .then((profile) => {
        window.location.replace(
          `https://docs.google.com/forms/d/e/1FAIpQLSfqXxAzWKInuEHOBx9wBqAJ97RrAYQGU6jU0gm7uiIdOfekbQ/viewform?usp=pp_url&entry.412902974=${profile.displayName}&entry.296537571=""&entry.1399061752=""&entry.1521116741=""&entry.883440859=""`
        );
      });
