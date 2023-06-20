class FlashlightPlugin {
    constructor() {
        this.id = "flashlight";
    }

    init() { }

    particleUpdate(particle, delta) {
        const distance = particle.getDistances().reduce((acc, curr) => {
            return curr.distance < acc ? curr.distance : acc;
        }, Infinity);

        const maxDistance = 300;
        const minOpacity = 0.1;
        const maxOpacity = 0.5;

        if (distance <= maxDistance) {
            const opacity = minOpacity + (maxOpacity - minOpacity) * (1 - distance / maxDistance);
            particle.opacity.value = opacity;
            particle.links.forEach((link) => {
                link.opacity = opacity;
            });
        } else {
            particle.opacity.value = minOpacity;
            particle.links.forEach((link) => {
                link.opacity = minOpacity;
            });
        }
    }
}

export default FlashlightPlugin;
