# postcss-loader-test
Test repo for `postcss-loader` to help debugging issues after upgrade of `postcss-loader` from version `1.3.3` to `2.0.5` [see #232]( https://github.com/postcss/postcss-loader/issues/232)

## Summary:

The only change between two versions below is an edit in [`package.json`:](https://github.com/olegstepura/postcss-loader-test/blob/master/package.json#L61)
```diff
-    "postcss-loader": "^1.3.3",
+    "postcss-loader": "^2.0.5",
```
And run `npm i` inside test repo folder after edit.

### With version `1.3.3`:
<details>
  <summary>Big screen, everything is stacked good (click to see screenshot)</summary>

   ![2017-05-17 11_52_15-test](https://cloud.githubusercontent.com/assets/534510/26149009/e3a80f8e-3af8-11e7-8c73-cee71a08a786.png)

</details>


<details>
  <summary>Small screen, animation is smooth  (click to see gif)</summary>

  ![940f45f3008aaed768ae5d0d39f216bf](https://cloud.githubusercontent.com/assets/534510/26149021/f1803ef6-3af8-11e7-8941-b616e4510c1b.gif)

</details>





### With version `2.0.5`:

<details>
  <summary>Big screen, strange spacing between navbar and appbar  (click to see screenshot)</summary>

![2017-05-17 11_56_14-test](https://cloud.githubusercontent.com/assets/534510/26149014/e6f7274c-3af8-11e7-8b47-9013be6b35bc.png)

</details>

<details>
<summary>Small screen   (click to see gif and comments)</summary>
 
- animation  is broken: fade out first, no transition animation of nav bar, it just disappears.
- icon color is also wrong (black instead of white)

![87e299ea8ba4172b6a58865cc7b9c9c3](https://cloud.githubusercontent.com/assets/534510/26149022/f19d0e64-3af8-11e7-8ef3-ce2589dc1258.gif)

</details>
