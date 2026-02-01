function volume_sphere() {
    let r = parseFloat(document.getElementById("radius").value);

    if (isNaN(r) || r < 0) {
        document.getElementById("volume").value = "";
        return false;
    }

    let v = (4 / 3) * Math.PI * Math.pow(r, 3);
    document.getElementById("volume").value = v.toFixed(4);

    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
