# Pagination

This component enables the user to select a specific page from a range of pages. The number of pages is calculated based on the `totalItems` and `itemsPerPage` props.

## Props

| name         | type                   | default | description                      |
| ------------ | ---------------------- | ------- | -------------------------------- |
| currentPage  | number                 | N/A     | The current page number          |
| itemsPerPage | number                 | N/A     | Number of items in one page      |
| totalItems   | number                 | N/A     | Total number of items            |
| onPageChange | (page: number) => void | N/A     | Callback to change current page  |
| compact     | boolean                | false   | Render in compact mode on mobile |

## Usage

Basic usage

```javascript
<Pagination
  currentPage={1}
  itemsPerPage={100}
  totalItems={400}
  onPageChange={onPageChange}
/>
```

Compact mode (only mobile)

```javascript
<Pagination
  currentPage={1}
  itemsPerPage={100}
  totalItems={400}
  onPageChange={onPageChange}
  compact
/>
```
