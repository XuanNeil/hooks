## Sử lý download file khi backend return 1 data.

```
    const { data } = await axios.get(apiurl, {
      responseType: 'arraybuffer',
      headers: { Accept: 'application/zip' },
    })
    const blob = new Blob([data], { type: 'application/zip' })
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.download = filename ?? 'download.zip';
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
```
