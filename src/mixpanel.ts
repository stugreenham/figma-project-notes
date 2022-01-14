type Properties = Record<string, any>;

export default class Mixpanel {
  projectId = null;
  distinctId = null;

  constructor(projectId) {
    if (!projectId) {
      throw new Error("Mixpanel: must be initialised with your projectId")
    }

    this.projectId = projectId;
  }

  identify(distinctId) {
    this.distinctId = distinctId;
  }

  track(eventName, properties?: Properties) {
    if (!this.distinctId) {
      throw new Error("Mixpanel: Please call identify before calling any other method");
    }

    const options = {
      method: 'POST',
      headers: {Accept: 'text/plain', 'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        data: JSON.stringify({
          event: eventName,
          properties: {
            ...properties,
            distinct_id: this.distinctId,
            token: this.projectId
          }
        })
      })
    };

    return fetch('https://api.mixpanel.com/track', options);
  }
}

console.log('imported mixpanel');