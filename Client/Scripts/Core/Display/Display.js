class Display {
    static PrepareDisplay() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;

        gl.enable(gl.BLEND);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.cullFace(gl.FRONT);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(0, 0.5, 1, 1);
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    static PostUpdateDisplay() {
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
    }

    static GetAspectRatio() {
        return canvas.width / canvas.height;
    }
}
