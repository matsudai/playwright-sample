# Playwright

## UI mode (debug)

```sh
npx playwright test --ui
```

## Test diff from before version

1. Compare

    ```sh
    CI=true npx playwright test --workers 4
    npx playwright show-report --host 0.0.0.0
    ```

1. Update

    ```sh
    CI=true npx playwright test --update-snapshots --workers 4
    ```
