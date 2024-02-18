<template>
  <view class="knowledge-tree" v-for="(item, index) in treeData" :key="index">
    <TreeNode :treeItem="item" :treeIndex="`${index}`"/>
  </view>
</template>

<script setup>
import TreeNode from './TreeNode.vue'

const treeData = [
  {
    "id": 2054,
    "name": "实数",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 3054,
        "name": "有理数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 5054,
            "name": "正数和负数",
            "count": 0,
            "score_rate": 0.5434782608695652,
            "children": [
              {
                "id": 1472054,
                "name": "正数、负数的概念",
                "count": 0,
                "score_rate": 0.9565217391304348
              },
              {
                "id": 1473054,
                "name": "零的认识",
                "count": 0,
                "score_rate": 0.5217391304347826
              },
              {
                "id": 1474054,
                "name": "用正负数表示具有相反意义的量",
                "count": 0,
                "score_rate": 0.7624223602484472
              }
            ]
          },
          {
            "id": 973054,
            "name": "有理数的概念",
            "count": 0,
            "score_rate": 0.5217391304347826
          },
          {
            "id": 4054,
            "name": "有理数的分类",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 7054,
            "name": "数轴",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1475054,
                "name": "数轴的三要素",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1476054,
                "name": "数轴的画法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1477054,
                "name": "数轴上的点和有理数的关系",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1478054,
                "name": "数轴上点的平移规律",
                "count": 0,
                "score_rate": 0.7644927536231884
              },
              {
                "id": 1479054,
                "name": "数轴上两点间的距离",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1664054,
            "name": "数轴上的对称问题",
            "count": 0,
            "score_rate": 0.7644927536231884
          },
          {
            "id": 8054,
            "name": "相反数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1480054,
                "name": "相反数的意义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1481054,
                "name": "相反数的性质",
                "count": 0,
                "score_rate": 0.8894927536231884
              },
              {
                "id": 1482054,
                "name": "相反数的求法",
                "count": 0,
                "score_rate": 0.8478260869565217
              },
              {
                "id": 1483054,
                "name": "多重符号的化简",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 974054,
            "name": "绝对值的非负性",
            "count": 0,
            "score_rate": 0.8792270531400966
          },
          {
            "id": 9054,
            "name": "绝对值",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1484054,
                "name": "绝对值的定义",
                "count": 0,
                "score_rate": 0.5434782608695652
              },
              {
                "id": 1485054,
                "name": "绝对值的代数意义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1486054,
                "name": "绝对值的几何意义",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 10054,
            "name": "有理数的大小比较",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1487054,
                "name": "有理数的大小比较（利用数轴）",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1488054,
                "name": "有理数的大小比较（运用法则）",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1489054,
                "name": "有理数的大小比较（取特殊值法）",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1490054,
                "name": "有理数的大小比较（作差法）",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1491054,
                "name": "有理数的大小比较（作商法）",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 11054,
            "name": "有理数的加法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1492054,
                "name": "有理数的加法法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1493054,
                "name": "有理数的加法运算律",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1494054,
                "name": "有理数加法的应用",
                "count": 0,
                "score_rate": 0.8079710144927537
              }
            ]
          },
          {
            "id": 12054,
            "name": "有理数的减法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1495054,
                "name": "有理数的减法法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1496054,
                "name": "有理数减法的应用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 13054,
            "name": "有理数的加减混合运算",
            "count": 0,
            "score_rate": 0.8079710144927537,
            "children": [
              {
                "id": 1497054,
                "name": "有理数的加减混合运算方法",
                "count": 0,
                "score_rate": 0.8342391304347826
              },
              {
                "id": 1674054,
                "name": "省略加号的和式的写法及读法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1498054,
                "name": "有理数的加减法的应用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 975054,
            "name": "有理数加减法的巧算",
            "count": 0,
            "score_rate": 0.8152173913043478
          },
          {
            "id": 14054,
            "name": "有理数的乘法",
            "count": 0,
            "score_rate": 0.8079710144927537,
            "children": [
              {
                "id": 1499054,
                "name": "有理数的乘法法则",
                "count": 0,
                "score_rate": 0.8260869565217391
              },
              {
                "id": 1500054,
                "name": "多个有理数相乘",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1501054,
                "name": "有理数的乘法运算律",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1502054,
                "name": "有理数乘法的应用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 17054,
            "name": "倒数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1503054,
                "name": "倒数的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1504054,
                "name": "倒数的性质",
                "count": 0,
                "score_rate": 0.9586956521739131
              }
            ]
          },
          {
            "id": 976054,
            "name": "有理数乘法的巧算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 15054,
            "name": "有理数的除法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1505054,
                "name": "有理数的除法法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1506054,
                "name": "有理数除法的应用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 977054,
            "name": "有理数的乘除混合运算",
            "count": 0,
            "score_rate": 0.8152173913043478
          },
          {
            "id": 978054,
            "name": "有理数的四则混合运算",
            "count": 0,
            "score_rate": 0.8079710144927537
          },
          {
            "id": 16054,
            "name": "有理数的乘方",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1507054,
                "name": "有理数乘方的意义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1508054,
                "name": "有理数乘方的运算符号法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1509054,
                "name": "有理数乘方的应用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 979054,
            "name": "乘方比大小",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 18054,
            "name": "有理数的混合运算",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1510054,
                "name": "有理数的混合运算（运算顺序）",
                "count": 0,
                "score_rate": 0.8152173913043478
              },
              {
                "id": 1511054,
                "name": "有理数的混合运算（新定义）",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1512054,
                "name": "有理数的混合运算（规律）",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1513054,
                "name": "有理数的混合运算（巧算）",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 19054,
            "name": "科学记数法与近似数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1514054,
                "name": "科学记数法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1515054,
                "name": "近似数与精确度",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 980054,
            "name": "有理数概念综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1690054,
            "name": "用计算器进行有理数的运算",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 981054,
        "name": "实数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 24054,
            "name": "算术平方根",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 25054,
            "name": "平方根",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 26054,
            "name": "立方根",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 982054,
            "name": "实数的概念",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1517054,
                "name": "无理数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1518054,
                "name": "实数的分类",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1519054,
                "name": "实数与数轴上点的关系",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 983054,
            "name": "实数的有关性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 443054,
            "name": "实数的运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 984054,
            "name": "实数大小的比较",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 985054,
            "name": "实数的实际应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 986054,
            "name": "根号几的估算与精确估算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 987054,
            "name": "带根号数的有关运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1682054,
            "name": "用计算器开方",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 33054,
    "name": "代数式",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 34054,
        "name": "整式",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 37054,
            "name": "用含字母的式子表示数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 38054,
            "name": "代数式",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1520054,
                "name": "代数式的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1521054,
                "name": "列代数式",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1522054,
                "name": "代数式的意义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1523054,
                "name": "代数式的值",
                "count": 0,
                "score_rate": 0.9586956521739131
              },
              {
                "id": 1524054,
                "name": "列代数式表示规律型问题",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 42054,
            "name": "单项式",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1525054,
                "name": "单项式的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1526054,
                "name": "单项式的系数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1527054,
                "name": "单项式的次数",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 988054,
            "name": "单项式中的找规律问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 43054,
            "name": "多项式",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1528054,
                "name": "多项式的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1529054,
                "name": "多项式的项",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1530054,
                "name": "多项式的次数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1531054,
                "name": "升幂排列与降幂排列",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 989054,
            "name": "多项式中的次数求参问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 990054,
            "name": "整式的概念与方程的综合",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 41054,
        "name": "整式的加减",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 40054,
            "name": "同类项",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 991054,
            "name": "合并同类项",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1532054,
                "name": "合并同类项的概念",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1533054,
                "name": "合并同类项法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1534054,
                "name": "合并同类项的一般步骤",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 992054,
            "name": "去括号与添括号",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 993054,
            "name": "整式的加减",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 994054,
            "name": "整式化简之与某项无关",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 995054,
            "name": "整式的化简与求值(一)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 996054,
            "name": "利用特殊概念化简求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 997054,
            "name": "整体代入求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 998054,
            "name": "降次法求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 999054,
            "name": "整式加减中的新定义运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1000054,
            "name": "绝对值与平方的非负性",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1001054,
            "name": "绝对值的化简",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1002054,
            "name": "数轴上数的比较与运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1003054,
            "name": "数轴背景下的绝对值化简",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1004054,
            "name": "探索与表达规律",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1005054,
            "name": "整式加减的应用",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1006054,
        "name": "整式的乘除",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 49054,
            "name": "同底数幂的乘法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1007054,
            "name": "幂的乘方",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1008054,
            "name": "积的乘方",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1009054,
            "name": "利用积的乘方巧算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 44054,
            "name": "整式的乘法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1535054,
                "name": "单项式乘单项式",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1536054,
                "name": "单项式乘多项式",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1537054,
                "name": "多项式乘多项式",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1010054,
            "name": "整式乘法的系数问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1011054,
            "name": "整式乘法的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 50054,
            "name": "同底数幂的除法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1012054,
            "name": "零指数幂",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 45054,
            "name": "整式的除法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1538054,
                "name": "单项式除以单项式",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1539054,
                "name": "多项式除以单项式",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1013054,
            "name": "同底数幂的拆解与变形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1014054,
            "name": "关联底数幂的变形技巧",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 51054,
            "name": "平方差公式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1015054,
            "name": "平方差公式的巧用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1016054,
            "name": "平方差公式的雪球效应",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 52054,
            "name": "完全平方公式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1017054,
            "name": "完全平方公式的运用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1018054,
            "name": "整式的化简与求值(二)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1019054,
            "name": "已知x、y的和与积求代数式的值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1020054,
            "name": "乘法公式在解方程和不等式组中的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1021054,
            "name": "利用乘法公式证明整除问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1022054,
            "name": "用乘法公式解规律探究题",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 55054,
        "name": "因式分解",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 56054,
            "name": "因式分解的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 58054,
            "name": "公因式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 59054,
            "name": "提公因式法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1023054,
            "name": "公式法之平方差公式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1024054,
            "name": "公式法之完全平方公式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 61054,
            "name": "分组分解法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 62054,
            "name": "首一的十字相乘法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1025054,
            "name": "非首一的十字相乘法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1026054,
            "name": "因式分解之添项法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1027054,
            "name": "因式分解之拆项法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1028054,
            "name": "因式分解两大秘诀",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1029054,
            "name": "利用因式分解求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1030054,
            "name": "利用配方求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1031054,
            "name": "在实数范围内因式分解",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 57054,
            "name": "因式分解的应用",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 65054,
        "name": "分式",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 66054,
            "name": "分式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 67054,
            "name": "分式有无意义的条件",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 69054,
            "name": "分式值为0",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1033054,
            "name": "分式的值为正数或负数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1034054,
            "name": "分式的值为整数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 70054,
            "name": "分式的基本性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1035054,
            "name": "分式中的约分与通分",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1540054,
                "name": "分式的约分",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1541054,
                "name": "最简分式",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1542054,
                "name": "分式的通分",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1543054,
                "name": "最简公分母",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 74054,
            "name": "分式的乘除",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1544054,
                "name": "分式的乘法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1545054,
                "name": "分式的除法",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 75054,
            "name": "分式的乘方",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 73054,
            "name": "分式的加减",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1546054,
                "name": "同分母分式相加减",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1547054,
                "name": "异分母分式相加减",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 76054,
            "name": "分式的混合运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1036054,
            "name": "分式的化简与求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1037054,
            "name": "需要代入消元的分式化简求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1692054,
            "name": "比的意义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1693054,
            "name": "比例的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1038054,
            "name": "比例的变形技巧",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1039054,
            "name": "二元分式的变形技巧",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1040054,
            "name": "连比设k法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 47054,
            "name": "整数指数幂",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1041054,
            "name": "用科学记数法表示绝对值小于1 的数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1042054,
            "name": "分式的探究创新题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 77054,
            "name": "分式运算的实际应用",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 78054,
        "name": "二次根式",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 79054,
            "name": "二次根式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1043054,
            "name": "二次根式有意义的条件",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1044054,
            "name": "二次根式的非负性",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1046054,
            "name": "二次根式乘除法法则",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1548054,
                "name": "二次根式的乘法法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1549054,
                "name": "二次根式的乘法法则的逆用",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1550054,
                "name": "二次根式的除法法则",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1551054,
                "name": "二次根式的除法法则的逆用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 84054,
            "name": "最简二次根式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1047054,
            "name": "二次根式的乘除运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1048054,
            "name": "根号外的因数（式）移到根号内问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1049054,
            "name": "同类二次根式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1045054,
            "name": "去根号法则",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 82054,
            "name": "二次根式的加减",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1050054,
            "name": "含字母的根式化简",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1051054,
            "name": "条件有理化",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1052054,
            "name": "分母有理化",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1053054,
            "name": "复合二次根式化简",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1054054,
            "name": "二次根式的化简求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 83054,
            "name": "二次根式的混合运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1055054,
            "name": "二次根式的估算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1056054,
            "name": "二次根式的规律探究",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 445054,
            "name": "二次根式的大小比较",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 1057054,
    "name": "方程与不等式",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 90054,
        "name": "一元一次方程",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1059054,
            "name": "方程的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 91054,
            "name": "一元一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1060054,
            "name": "方程的解",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 93054,
            "name": "等式的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1061054,
            "name": "合并同类项与移项",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1662054,
                "name": "解一元一次方程——合并同类项",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1663054,
                "name": "解一元一次方程——移项",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1062054,
            "name": "列一元一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1063054,
            "name": "去括号",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1064054,
            "name": "去分母",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1065054,
            "name": "解分母是小数的一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1066054,
            "name": "恒等式的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1067054,
            "name": "恒等式之特值法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1068054,
            "name": "同解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1069054,
            "name": "简单的绝对值方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1070054,
            "name": "已知方程的解求参数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1071054,
            "name": "系数含参的一元一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1072054,
            "name": "整数解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1073054,
            "name": "用适当的方法解一元一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1074054,
            "name": "一元一次方程的应用之和差倍分问题",
            "count": 0,
            "score_rate": 0.8571428571428571
          },
          {
            "id": 1075054,
            "name": "与数字有关的一元一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1076054,
            "name": "与工程有关的一元一次方程",
            "count": 0,
            "score_rate": 0.9805194805194806
          },
          {
            "id": 1077054,
            "name": "与经济有关的一元一次方程",
            "count": 0,
            "score_rate": 0.8102240896358543
          },
          {
            "id": 1078054,
            "name": "与行程有关的一元一次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1079054,
            "name": "方法决策问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1080054,
            "name": "一元一次方程的应用之配套问题",
            "count": 0,
            "score_rate": 0.9583333333333334
          },
          {
            "id": 1081054,
            "name": "一元一次方程的应用之调配问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1082054,
            "name": "一元一次方程的应用之球赛积分问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1083054,
            "name": "一元一次方程的应用之年龄问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1084054,
            "name": "一元一次方程的应用之图表信息问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1085054,
            "name": "一元一次方程的应用之分段计费问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1086054,
            "name": "一元一次方程的应用之银行利息问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1087054,
            "name": "一元一次方程的应用之比例分配问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1675054,
            "name": "一元一次方程的应用之盈不足问题",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 98054,
        "name": "二元一次方程(组)",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 99054,
            "name": "二元一次方程",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1670054,
                "name": "二元一次方程的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1671054,
                "name": "二元一次方程的解",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 435054,
            "name": "二元一次方程组",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1672054,
                "name": "二元一次方程组的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1673054,
                "name": "二元一次方程组的解",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 100054,
            "name": "代入消元法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 446054,
            "name": "加减消元法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 447054,
            "name": "用适当的方法解二元一次方程组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1088054,
            "name": "解复杂的二元一次方程组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1089054,
            "name": "解含参的方程组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1090054,
            "name": "含参方程组经典问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1091054,
            "name": "加减两个已知式求未知式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1092054,
            "name": "二元一次方程整数解",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1093054,
            "name": "已知方程（组）的解求参数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1094054,
            "name": "二元一次方程（组）的探究性问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1095054,
            "name": "二元一次方程组的应用之销售问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1096054,
            "name": "二元一次方程组的应用之行程问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1097054,
            "name": "二元一次方程组的应用之工程问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1098054,
            "name": "二元一次方程组的应用之配套问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1099054,
            "name": "二元一次方程组的应用之分配问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1100054,
            "name": "二元一次方程组的应用之图表信息问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1101054,
            "name": "二元一次方程组的应用之方案问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1102054,
            "name": "二元一次方程组的应用之古算问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1683054,
            "name": "二元一次方程组的应用之数字问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1103054,
            "name": "鸡兔同笼",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1104054,
            "name": "增收节支",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1105054,
            "name": "里程碑上的数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1106054,
            "name": "二元一次方程组实际问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 104054,
            "name": "三元一次方程组的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 448054,
            "name": "三元一次方程组的解法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1107054,
            "name": "根据两个三元一次式凑第三个",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1108054,
            "name": "三元不定方程的整数解",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1109054,
            "name": "求三个字母之比",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 106054,
            "name": "三元一次方程组的实际应用",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 120054,
        "name": "一元二次方程",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 121054,
            "name": "一元二次方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 122054,
            "name": "一元二次方程的一般形式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1110054,
            "name": "一元二次方程与降次",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1111054,
            "name": "利用方程根的概念求值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1112054,
            "name": "直接开平方法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1113054,
            "name": "配方法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1114054,
            "name": "公式法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1115054,
            "name": "整数根之直接求根",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1116054,
            "name": "提取公因式法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1699054,
            "name": "运用公式法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1117054,
            "name": "十字相乘法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1118054,
            "name": "根的判别式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1119054,
            "name": "整数根之判别式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1120054,
            "name": "已知根的个数求参数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1121054,
            "name": "已知两根的和与积求参数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1122054,
            "name": "根与系数的关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1123054,
            "name": "已知一个根求另一个根",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1124054,
            "name": "根与系数关系的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1125054,
            "name": "两根的倒数和",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1126054,
            "name": "两根之差的绝对值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1127054,
            "name": "两根的平方和",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1128054,
            "name": "证明方程恒有实根",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1129054,
            "name": "列一元二次方程解实际问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1130054,
            "name": "增长率问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1131054,
            "name": "草坪问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1132054,
            "name": "篱笆问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1133054,
            "name": "传播问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1134054,
            "name": "利润问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1135054,
            "name": "数字问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1136054,
            "name": "动点问题",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 131054,
        "name": "分式方程",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 132054,
            "name": "分式方程的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 133054,
            "name": "解分式方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1137054,
            "name": "解含参分式方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1138054,
            "name": "含参分式方程增根问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1139054,
            "name": "x与x的倒数和",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1140054,
            "name": "隐藏的x与x的倒数和",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1141054,
            "name": "工程问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1142054,
            "name": "行程问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1143054,
            "name": "其他问题",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1144054,
        "name": "不等式与不等式组",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 110054,
            "name": "不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 112054,
            "name": "不等式的解及解集",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 111054,
            "name": "不等式的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 116054,
            "name": "一元一次不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 117054,
            "name": "解一元一次不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1145054,
            "name": "解含参的不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1146054,
            "name": "不等式的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 424054,
            "name": "一元一次不等式组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1147054,
            "name": "不等式组的解集",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 425054,
            "name": "解一元一次不等式组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1148054,
            "name": "含参不等式组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 119054,
            "name": "一元一次不等式组的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1149054,
            "name": "不等式与坐标系综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1151054,
            "name": "含参方程组与不等式综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1150054,
            "name": "含参方程与不等式综合",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 139054,
    "name": "函数",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1677054,
        "name": "变量之间的关系",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1678054,
            "name": "变量和常量",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1679054,
            "name": "用表格表示变量间的关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1680054,
            "name": "关系式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1681054,
            "name": "用图象表示变量间的关系",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 273054,
        "name": "平面直角坐标系",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 275054,
            "name": "有序数对",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 274054,
            "name": "平面直角坐标系的认识",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 276054,
            "name": "点的坐标",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1152054,
            "name": "各象限内点的坐标特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1153054,
            "name": "坐标轴上点的坐标特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1154054,
            "name": "各象限角平分线上的点的坐标特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1665054,
            "name": "关于原点对称的点的坐标特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 279054,
            "name": "关于坐标轴对称的点的坐标特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1155054,
            "name": "点到坐标轴的距离",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1156054,
            "name": "点关于平行于坐标轴的直线对称",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 281054,
            "name": "用坐标表示地理位置",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1689054,
            "name": "利用方向角和距离表示地理位置",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1157054,
            "name": "坐标系中的面积计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1158054,
            "name": "坐标系中点与图形的平移",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 140054,
        "name": "函数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 141054,
            "name": "变量与常量",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 143054,
            "name": "函数的认识",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 145054,
            "name": "自变量的取值范围",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1159054,
            "name": "函数解析式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 147054,
            "name": "函数值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 142054,
            "name": "函数的表示方法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1666054,
            "name": "函数图象及其画法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 149054,
            "name": "分段函数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 148054,
            "name": "实际问题的函数图象",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 150054,
        "name": "一次函数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 151054,
            "name": "正比例函数的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 154054,
            "name": "正比例函数的图象与性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1160054,
            "name": "从正比例到一次函数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1694054,
            "name": "一次函数的图象",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 156054,
            "name": "一次函数图象的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 159054,
            "name": "待定系数法求解析式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 158054,
            "name": "一次函数图像的平移",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1161054,
            "name": "函数图象的共存问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1162054,
            "name": "一次函数图象与坐标轴围成的三角形面积问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1163054,
            "name": "补全直线上点坐标",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 160054,
            "name": "一次函数与方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1684054,
            "name": "一次函数与二元一次方程组",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1164054,
            "name": "用函数的观点解不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 449054,
            "name": "一次函数与不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 161054,
            "name": "一次函数的实际应用",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 162054,
        "name": "反比例函数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 163054,
            "name": "反比例函数的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 164054,
            "name": "反比例函数的图象",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1556054,
                "name": "反比例函数图象的画法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1557054,
                "name": "反比例函数的图象与性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1165054,
            "name": "反比例函数的解析式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 167054,
            "name": "反比例函数图象上的点坐标乘积相等",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 166054,
            "name": "k的几何意义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1166054,
            "name": "已知反比例函数的x求y",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1167054,
            "name": "成反比例",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1168054,
            "name": "正比例函数和反比例函数图象的交点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 169054,
            "name": "一次函数与反比例函数图象的交点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1169054,
            "name": "反比例函数与一次函数的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1170054,
            "name": "通过交点求解析式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1171054,
            "name": "反比例函数与四边形的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1172054,
            "name": "实际问题与反比例函数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1173054,
            "name": "耗散问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 170054,
            "name": "反比例函数在跨学科中的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1174054,
            "name": "双反比例函数模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1175054,
            "name": "特殊的面积问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1176054,
            "name": "两条对称的双曲线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1177054,
            "name": "反比例函数与一次函数的综合应用",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 171054,
        "name": "二次函数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 172054,
            "name": "二次函数的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1178054,
            "name": "最简二次函数的图象",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1179054,
            "name": "二次函数y=ax²+k的图象",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1180054,
            "name": "二次函数y=a(x-h)²的图象",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1181054,
            "name": "顶点式二次函数的图象",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1182054,
            "name": "二次函数y=ax²+bx+c的图象",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1183054,
            "name": "从一般式到顶点式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 173054,
            "name": "二次函数图象上点的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 186054,
            "name": "求抛物线与坐标轴的交点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1667054,
            "name": "求二次函数的解析式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1184054,
            "name": "顶点式和交点式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1185054,
            "name": "二次函数图象的平移(一)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1186054,
            "name": "二次函数图象的平移(二)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 180054,
            "name": "二次函数图象的变换",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1187054,
            "name": "图象分析大杂烩",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 184054,
            "name": "二次函数特定范围内的最值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1188054,
            "name": "二次函数最值之解析式含参",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 179054,
            "name": "看图象求参数关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1189054,
            "name": "二次函数与一次函数的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1190054,
            "name": "二次函数与一元二次方程的关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1191054,
            "name": "用函数观点解方程(一)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1192054,
            "name": "用函数观点解方程(二)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1193054,
            "name": "用函数观点解不等式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1194054,
            "name": "利用二次函数求点坐标",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1195054,
            "name": "定价问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1196054,
            "name": "利用二次函数求最值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1197054,
            "name": "拱桥通车问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1198054,
            "name": "方案选择问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1199054,
            "name": "动点几何问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1200054,
            "name": "直线与抛物线的交点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1201054,
            "name": "看图写范围",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1202054,
            "name": "抛物线与直线的垂直距离",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 233054,
    "name": "几何图形",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1203054,
        "name": "图形的初步认识",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 237054,
            "name": "生活中的立体图形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 235054,
            "name": "平面图形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 239054,
            "name": "从不同方向看立体图形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1204054,
            "name": "展开图初步",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 240054,
            "name": "立方体的展开图",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1205054,
            "name": "立方体相对两面",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1206054,
            "name": "展开图进阶",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1207054,
            "name": "展开图折叠成几何体",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 234054,
            "name": "点、线、面、体",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1208054,
            "name": "旋转体",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1209054,
            "name": "截一个几何体",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1210054,
            "name": "直线、射线、线段",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1558054,
                "name": "直线的概念及其表示方法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1559054,
                "name": "点与直线的位置关系",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1560054,
                "name": "相交直线",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1561054,
                "name": "直线的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1562054,
                "name": "射线的概念及其表示方法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1563054,
                "name": "线段的概念及其表示方法",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1211054,
            "name": "几何作图初步",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1212054,
            "name": "两点之间线段最短",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1213054,
            "name": "线段的计数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1214054,
            "name": "两点间的距离",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1215054,
            "name": "线段的长度比较",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1216054,
            "name": "与线段有关的简单计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1217054,
            "name": "线段计算之多解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1218054,
            "name": "线段计算之列方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1219054,
            "name": "双中点模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1220054,
            "name": "线段、射线条数的规律探究",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1221054,
            "name": "角的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1222054,
            "name": "角的表示方法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1223054,
            "name": "角的分类",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1224054,
            "name": "角的度量",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1225054,
            "name": "角度换算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1226054,
            "name": "角的比较",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1227054,
            "name": "角度的四则运算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1228054,
            "name": "角度计算多解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1229054,
            "name": "角度计算之三角板问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1230054,
            "name": "角度计算之角平分线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1231054,
            "name": "双角平分线模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1232054,
            "name": "角度计算之列方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 253054,
            "name": "余角和补角",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1564054,
                "name": "余角的定义和性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1565054,
                "name": "补角的定义和性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1233054,
            "name": "余角和补角之列方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1234054,
            "name": "角度计算之双直角模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 467054,
            "name": "方向角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1235054,
            "name": "钟面角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1236054,
            "name": "简单的几何计数问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1700054,
            "name": "直棱柱的侧面展开图",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1701054,
            "name": "圆柱的侧面展开图",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 269054,
        "name": "命题与证明",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 430054,
            "name": "定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1237054,
            "name": "命题与定理",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1566054,
                "name": "命题的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1567054,
                "name": "命题的组成",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1568054,
                "name": "命题的形式",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1569054,
                "name": "命题的分类",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1570054,
                "name": "定理",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1571054,
                "name": "互逆命题与互逆定理",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1695054,
                "name": "基本事实",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1238054,
            "name": "为什么要证明",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1685054,
            "name": "证明的必要性",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1703054,
            "name": "反证法",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 255054,
        "name": "相交线与平行线",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1239054,
            "name": "相交线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 256054,
            "name": "对顶角、邻补角的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1240054,
            "name": "对顶角的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1241054,
            "name": "邻补角的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1242054,
            "name": "对顶角与邻补角的有关计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1243054,
            "name": "垂直",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1572054,
                "name": "垂线的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1573054,
                "name": "垂线的性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1704054,
            "name": "作已知直线的垂线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1244054,
            "name": "垂线段最短",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 258054,
            "name": "点到直线的距离",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1245054,
            "name": "角度计算之多解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1246054,
            "name": "与垂直有关的常见计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 260054,
            "name": "同位角、内错角、同旁内角及判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1247054,
            "name": "三线八角中的计数问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1248054,
            "name": "平行线的定义及表示法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1249054,
            "name": "平行线的画法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 458054,
            "name": "平行公理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1250054,
            "name": "平行公理的推论",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1251054,
            "name": "平行线及其判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1252054,
            "name": "平行线判定的易错点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 262054,
            "name": "平行线的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1253054,
            "name": "先判定平行再利用平行性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1254054,
            "name": "与平行有关的证明",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1255054,
            "name": "与平行线有关的计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1256054,
            "name": "平行线之M模型",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 308054,
        "name": "三角形",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1668054,
            "name": "三角形的有关概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 313054,
            "name": "三角形的三边关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1257054,
            "name": "三角形按边分类",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1258054,
            "name": "利用三边关系计数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1259054,
            "name": "三边关系与绝对值化简综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1260054,
            "name": "三角形中的线段",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1574054,
                "name": "三角形的高",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1575054,
                "name": "三角形的中线",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1576054,
                "name": "三角形的角平分线",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1261054,
            "name": "添线法算三角形的个数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 311054,
            "name": "三角形的稳定性",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 314054,
            "name": "三角形内角和定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1262054,
            "name": "三角形内角和之列方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1263054,
            "name": "三角形按角分类",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1264054,
            "name": "直角三角形的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1265054,
            "name": "直角三角形的判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1266054,
            "name": "三角形中的双垂直模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 315054,
            "name": "三角形的外角",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1577054,
                "name": "三角形外角的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1578054,
                "name": "三角形外角的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1579054,
                "name": "三角形的外角和定理",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1267054,
            "name": "与三角板有关的计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1268054,
            "name": "三角形与平行线综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1269054,
            "name": "高线、角平分线综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1270054,
            "name": "“8”字形和“A”字形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1271054,
            "name": "燕尾形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1272054,
            "name": "内角平分线的交角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1273054,
            "name": "外角平分线的交角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1274054,
            "name": "内外角平分线的交角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1275054,
            "name": "三角形角度内折问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1276054,
            "name": "折线角度和问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1277054,
            "name": "多边形初步",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 266054,
            "name": "多边形的对角线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 267054,
            "name": "多边形的内角和",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 459054,
            "name": "多边形的外角和",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1278054,
            "name": "多边形的内角和进阶",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1279054,
            "name": "正多边形",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1580054,
                "name": "正多边形的概念",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1581054,
                "name": "正多边形的性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 236054,
            "name": "平面镶嵌",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1280054,
            "name": "等腰三角形的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1281054,
            "name": "等边对等角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1286054,
            "name": "等腰三角形与线段垂直平分线的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1282054,
            "name": "等边对等角多解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1283054,
            "name": "等腰三角形三线合一",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1284054,
            "name": "等角对等边",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1285054,
            "name": "角平分线+平行",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1289054,
            "name": "等腰三角形的判定及性质的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 322054,
            "name": "等边三角形",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1582054,
                "name": "等边三角形的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1583054,
                "name": "等边三角形的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1584054,
                "name": "等边三角形的判定",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 325054,
            "name": "含30°角的直角三角形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1287054,
            "name": "等边三角形类弦图模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1288054,
            "name": "绕直角顶点转90度",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 353054,
        "name": "四边形",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1290054,
            "name": "平行四边形的概念及表示",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 356054,
            "name": "平行四边形的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1292054,
            "name": "两条平行线间的距离",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1293054,
            "name": "性质反过来就是判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1294054,
            "name": "平行且相等",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1295054,
            "name": "判定方法辨析",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1296054,
            "name": "三角形中位线的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1297054,
            "name": "已知三点找第四点确定平行四边形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1298054,
            "name": "平行四边形面积问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1299054,
            "name": "含特殊角的平行四边形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1300054,
            "name": "平行四边形与全等",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1301054,
            "name": "坐标系中的平行四边形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1302054,
            "name": "矩形的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1303054,
            "name": "矩形的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1304054,
            "name": "矩形的判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1305054,
            "name": "斜边中线定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1306054,
            "name": "勾股定理在矩形中的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1307054,
            "name": "直角三角形中矩形最值问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1308054,
            "name": "菱形的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1309054,
            "name": "菱形的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1310054,
            "name": "菱形的判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1311054,
            "name": "菱形的面积",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1312054,
            "name": "坐标系中的菱形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1313054,
            "name": "等宽纸条重叠问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1314054,
            "name": "与60°有关的矩形和菱形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1315054,
            "name": "正方形的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1316054,
            "name": "正方形的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1317054,
            "name": "正方形的判定",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1318054,
            "name": "与正方形有关的旋转全等",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1319054,
            "name": "正方形与等边共边问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1320054,
            "name": "正方形中的垂直线段",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1321054,
            "name": "正方形对称性的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1322054,
            "name": "正方形的面积",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1323054,
            "name": "中点四边形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1324054,
            "name": "四边形动点问题",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1325054,
        "name": "三角形全等",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1326054,
            "name": "全等形的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1327054,
            "name": "全等三角形的概念和性质",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1585054,
                "name": "全等三角形的概念及表示",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1586054,
                "name": "全等三角形的性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1328054,
            "name": "图形变换中的全等三角形问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1329054,
            "name": "用尺规作角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1330054,
            "name": "全等三角形的判定（SSS）",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1331054,
            "name": "全等三角形的判定（SAS）",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1332054,
            "name": "全等三角形的判定（ASA）",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1333054,
            "name": "全等三角形的判定（AAS）",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1676054,
            "name": "用尺规作三角形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1334054,
            "name": "全等三角形的判定（HL）",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1335054,
            "name": "全等三角形判定综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1336054,
            "name": "利用三角形全等测距离",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1337054,
            "name": "还原残缺三角形的原理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1338054,
            "name": "多次证明全等",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1339054,
            "name": "证了全等再说",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1340054,
            "name": "角的对称性",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1341054,
            "name": "作已知角的平分线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1342054,
            "name": "角平分线的性质与判定",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1587054,
                "name": "角的平分线的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1588054,
                "name": "角的平分线的判定",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1343054,
            "name": "角平分线性质的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1344054,
            "name": "角平分线对称性之作垂线",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1345054,
            "name": "角平分线对称性之翻折",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1346054,
            "name": "角平分线对称性之顺延",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1347054,
            "name": "截长补短",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1348054,
            "name": "到三边距离相等的点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1349054,
            "name": "三垂直模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1350054,
            "name": "等腰共顶点模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1351054,
            "name": "连接两点",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1352054,
            "name": "倍长中线",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 367054,
        "name": "勾股定理",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 368054,
            "name": "勾股定理及验证",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1353054,
            "name": "利用勾股定理求边长",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1354054,
            "name": "勾股定理多解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1355054,
            "name": "已知两边和高求第三边",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 369054,
            "name": "勾股定理的逆定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 373054,
            "name": "勾股数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1356054,
            "name": "利用勾股定理列方程",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 326054,
            "name": "最短路径问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1357054,
            "name": "勾股定理在三类几何问题中的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1358054,
            "name": "网格与勾股定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1359054,
            "name": "三个正方形共线问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1360054,
            "name": "等边三角形面积公式",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1361054,
            "name": "特殊直角三角形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1362054,
            "name": "特殊直角三角形综合",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 374054,
        "name": "锐角三角函数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 375054,
            "name": "锐角三角函数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1589054,
                "name": "正弦",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1590054,
                "name": "余弦",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1591054,
                "name": "正切",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1592054,
                "name": "锐角三角形函数的定义",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 379054,
            "name": "特殊角的三角函数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1363054,
            "name": "锐角三角函数之间的关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1364054,
            "name": "锐角三角函数的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 382054,
            "name": "计算器在锐角三角函数中的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1365054,
            "name": "锐角三角函数与坐标系的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1669054,
            "name": "锐角三角函数与方程的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 385054,
            "name": "解直角三角形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 386054,
            "name": "解直角三角形的应用",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1593054,
                "name": "仰角和俯角问题",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1594054,
                "name": "方向角问题",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1595054,
                "name": "坡度与坡角问题",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1366054,
            "name": "影响持续时间问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1367054,
            "name": "斜坡影子问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1368054,
            "name": "网格中角的三角函数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1369054,
            "name": "双直角三角形及其应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1370054,
            "name": "设未知数解直角三角形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1371054,
            "name": "已知一个三角函数求其他",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1372054,
            "name": "利用已知角构造直角三角形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1373054,
            "name": "等角代换法求锐角三角函数值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1374054,
            "name": "解梯形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1375054,
            "name": "解四边形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1376054,
            "name": "已知等腰三边求内角三角函数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1377054,
            "name": "作垂线解三角形之SSA",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 387054,
        "name": "圆",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 389054,
            "name": "圆的基本概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 391054,
            "name": "垂径定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 393054,
            "name": "弧、弦、圆心角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1378054,
            "name": "已知弦长和弦弧距求半径",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1379054,
            "name": "两圆一中垂",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1380054,
            "name": "与垂径定理有关的多解问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1381054,
            "name": "构造垂径的技巧",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1382054,
            "name": "过圆中定点的弦的最值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1383054,
            "name": "弦垂直平分半径模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 394054,
            "name": "圆周角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1384054,
            "name": "等弧对等角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1385054,
            "name": "直径对直角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1386054,
            "name": "圆内接四边形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1387054,
            "name": "圆中的特殊角",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1389054,
            "name": "点和圆的位置关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1388054,
            "name": "圆的确定条件",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1390054,
            "name": "三角形外接圆",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1391054,
            "name": "点到圆的距离的最值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1392054,
            "name": "平行性质定理的证明",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1393054,
            "name": "直线和圆的位置关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1394054,
            "name": "圆上点到直线的距离",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1395054,
            "name": "切线判定定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1396054,
            "name": "切线性质定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1397054,
            "name": "切线长定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1398054,
            "name": "切线夹角与所夹弧的关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1399054,
            "name": "直线上动点的切线长最小值",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 407054,
            "name": "三角形的内切圆",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 410054,
            "name": "圆和圆的位置关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 411054,
            "name": "正多边形和圆",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1607054,
                "name": "正多边形的有关概念",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1608054,
                "name": "正多边形和圆的有关计算",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1400054,
            "name": "正八边形的相关计算",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1401054,
            "name": "正多边形的画法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1402054,
            "name": "弧长",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 420054,
            "name": "扇形面积",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1403054,
            "name": "弓形面积",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1404054,
            "name": "圆锥",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1609054,
                "name": "圆锥的侧面积",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1610054,
                "name": "圆锥的全面积",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1405054,
            "name": "底面半径和母线的比与圆心角的关系",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1407054,
            "name": "圆锥中的最短路径问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1406054,
            "name": "圆锥与其侧面展开图",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1408054,
            "name": "不规则图形面积的求法",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1421054,
        "name": "图形与变换",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1409054,
            "name": "轴对称基本概念和性质",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1611054,
                "name": "轴对称图形",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1612054,
                "name": "两个图形成轴对称",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1613054,
                "name": "轴对称的性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1410054,
            "name": "线段垂直平分线的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1411054,
            "name": "垂直平分线的性质与判定",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1614054,
                "name": "线段垂直平分线的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1615054,
                "name": "线段垂直平分线的判定",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1412054,
            "name": "垂直平分线性质的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1413054,
            "name": "垂直平分线作图问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1414054,
            "name": "轴对称变换",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1415054,
            "name": "画轴对称图形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1416054,
            "name": "点关于坐标轴对称",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1417054,
            "name": "台球反弹问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1418054,
            "name": "轴对称-最短路径问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1419054,
            "name": "“造桥选址”问题",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1420054,
            "name": "将军饮马问题的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1422054,
            "name": "平移",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1616054,
                "name": "平移的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1617054,
                "name": "平移的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1618054,
                "name": "平移作图",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 290054,
            "name": "图形的旋转",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1619054,
                "name": "旋转的概念",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1620054,
                "name": "旋转中心",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1621054,
                "name": "旋转角",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1622054,
                "name": "旋转的性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1423054,
            "name": "旋转图形的画法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1424054,
            "name": "平面直角坐标系中的旋转变换",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1425054,
            "name": "旋转特殊角度",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1426054,
            "name": "互补四边形半角模型(一)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1427054,
            "name": "互补四边形半角模型(二)",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1428054,
            "name": "等腰直角三角形半角模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1429054,
            "name": "中心对称的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1430054,
            "name": "中心对称的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1431054,
            "name": "画已知图形关于某一点对称的图形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 296054,
            "name": "中心对称图形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 280054,
            "name": "关于原点对称的点的坐标",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1691054,
            "name": "利用几何变换设计图案",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 334054,
        "name": "图形的相似",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 335054,
            "name": "相似的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 337054,
            "name": "比例线段",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1623054,
                "name": "比例线段的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1624054,
                "name": "比例的基本性质",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 339054,
            "name": "相似多边形",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1625054,
                "name": "相似多边形的定义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1626054,
                "name": "相似多边形的画法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1627054,
                "name": "相似多边形的性质",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1628054,
                "name": "相似多边形的判定",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1432054,
            "name": "相似三角形的定义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1433054,
            "name": "平行线分线段成比例",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1434054,
            "name": "相似三角形的判定",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1629054,
                "name": "相似三角形的判定定理1",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1630054,
                "name": "相似三角形的判定定理2",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1631054,
                "name": "相似三角形的判定定理3",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1632054,
                "name": "相似三角形的判定定理4",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1633054,
                "name": "相似三角形的判定定理5",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 342054,
            "name": "相似三角形的性质",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1634054,
                "name": "相似三角形的性质1",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1635054,
                "name": "相似三角形的性质2",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1636054,
                "name": "相似三角形的性质3",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1637054,
                "name": "相似三角形的性质4",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1435054,
            "name": "网格中的相似",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 346054,
            "name": "相似三角形判定与性质的综合应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1436054,
            "name": "反A模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1437054,
            "name": "射影定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1438054,
            "name": "共线三等角模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1439054,
            "name": "旋转相似模型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1440054,
            "name": "三角形内接正方形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1441054,
            "name": "画平行线构造相似",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1442054,
            "name": "相似三角形应用举例",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1443054,
            "name": "相似三角形的复杂应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1444054,
            "name": "角平分线定理",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1445054,
            "name": "位似的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1447054,
            "name": "位似图形的画法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1446054,
            "name": "位似图形的性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1448054,
            "name": "坐标系中的位似变换",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1449054,
        "name": "投影与视图",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 220054,
            "name": "投影",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 221054,
                "name": "平行投影",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 222054,
                "name": "中心投影",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 223054,
                "name": "正投影",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 225054,
                "name": "视点、视角和盲区",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1638054,
                "name": "投影的定义",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1450054,
            "name": "三视图的概念",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1451054,
            "name": "三视图的特征及画法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1453054,
            "name": "立方体堆的三视图",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1454054,
            "name": "由视图推断几何体中正方体的个数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1455054,
            "name": "由三视图判断几何体",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1456054,
            "name": "三视图的有关计算",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 238054,
        "name": "几何体的表面积和体积",
        "count": 0,
        "score_rate": -1
      }
    ]
  },
  {
    "id": 1705054,
    "name": "图形与几何",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1706054,
        "name": "长方体和正方体",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1707054,
            "name": "长方体和正方体的认识",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1713054,
                "name": "长正方体的特征",
                "count": 0,
                "score_rate": -1
              }
            ]
          }
        ]
      },
      {
        "id": 1708054,
        "name": "圆柱与圆锥",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1709054,
            "name": "圆锥的认识",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1710054,
            "name": "圆柱的认识",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 1714054,
    "name": "观察物体",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1711054,
        "name": "观察物体",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1712054,
            "name": "观察立体图形",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 187054,
    "name": "统计与概率",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1457054,
        "name": "统计",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1458054,
            "name": "统计调查",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1639054,
                "name": "数据的收集与整理",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1640054,
                "name": "全面调查与抽样调查",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1641054,
                "name": "总体、个体、样本与样本容量",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1688054,
                "name": "简单随机抽样",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1642054,
                "name": "统计表",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1459054,
            "name": "常见统计图及选择",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1643054,
                "name": "条形统计图",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1644054,
                "name": "折线统计图",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1645054,
                "name": "扇形统计图",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 201054,
            "name": "直方图",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1646054,
                "name": "频数与频率",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1647054,
                "name": "频数分布表",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1648054,
                "name": "频数分布直方图",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1460054,
            "name": "利用关键数据补全图表",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1461054,
            "name": "平均数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1649054,
                "name": "算术平均数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1650054,
                "name": "加权平均数",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1462054,
            "name": "用样本平均数估计总体平均数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1463054,
            "name": "中位数和众数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1651054,
                "name": "中位数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1652054,
                "name": "众数",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 207054,
            "name": "平均数、中位数与众数的综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1686054,
            "name": "统计图中的数据分析",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1696054,
            "name": "数据的离散程度",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1464054,
            "name": "方差和极差",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1653054,
                "name": "方差",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1654054,
                "name": "极差",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1465054,
            "name": "用样本方差估计总体方差",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1466054,
            "name": "数据的分析概念综合",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1467054,
            "name": "数据的反求",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1468054,
            "name": "关联数据的方差",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1697054,
            "name": "用计算器计算平均数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1698054,
            "name": "用计算器计算方差",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 210054,
        "name": "概率",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 211054,
            "name": "认识事件",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1655054,
                "name": "必然事件",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1656054,
                "name": "随机事件",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1657054,
                "name": "不可能事件",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 212054,
            "name": "事件发生的可能性的大小",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1687054,
            "name": "频率的稳定性",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1469054,
            "name": "认识概率",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1658054,
                "name": "概率的意义",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1659054,
                "name": "概率计算公式",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 215054,
            "name": "用列举法求概率",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1660054,
                "name": "列表法求概率",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1661054,
                "name": "树状图法求概率",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 217054,
            "name": "用频率估计概率",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1470054,
            "name": "几何概型",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1471054,
            "name": "已知概率反求样本",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 218054,
            "name": "概率的应用",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1702054,
            "name": "随机现象的变化趋势",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 1715054,
    "name": "整数部分",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1716054,
        "name": "数的认识",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1717054,
            "name": "万以上数的认识",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1727054,
                "name": "数的产生",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1718054,
            "name": "因数与倍数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1719054,
            "name": "质数与合数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1720054,
            "name": "2、5的倍数的特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1721054,
            "name": "3的倍数的特征",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1722054,
            "name": "奇数和偶数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1723054,
            "name": "质因数和分解质因数",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 1724054,
    "name": "分数部分",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1725054,
        "name": "分数的基础知识",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1726054,
            "name": "公因数与最大公因数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1728054,
            "name": "公倍数与最小公倍数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1729054,
            "name": "分数的认识",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1730054,
                "name": "分数的初步认识",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1731054,
                "name": "整体的几分之几",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1732054,
                "name": "分数的再认识",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1733054,
            "name": "分数的基本性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1734054,
            "name": "真分数和假分数",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1735054,
                "name": "真分数的意义和特征",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1736054,
                "name": "假分数的意义和特征",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1737054,
                "name": "带分数的认识",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1738054,
            "name": "倒数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1739054,
            "name": "分数与除法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1740054,
            "name": "分数的大小比较",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1741054,
                "name": "分数比大小的方法",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1742054,
                "name": "分数大小比较的应用",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1743054,
            "name": "约分",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1745054,
                "name": "最简分数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1744054,
                "name": "认识约分",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1746054,
            "name": "通分",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1747054,
                "name": "认识通分",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1748054,
            "name": "分数和小数的互化",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1749054,
        "name": "分数运算",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1750054,
            "name": "同分母分数加减法",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1751054,
            "name": "异分母分数加减法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1752054,
                "name": "异分母分数的加减法",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1753054,
            "name": "分数乘法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1754054,
                "name": "分数乘整数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1755054,
                "name": "小数乘分数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1756054,
                "name": "分数乘分数",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1757054,
            "name": "分数除法",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1758054,
                "name": "分数除以整数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1759054,
                "name": "一个数除以分数",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1760054,
            "name": "求一个数是另一个数的几分之几",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1761054,
            "name": "求一个数的几分之几是多少",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1762054,
            "name": "已知一个数的几分之几是多少求这个数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1763054,
            "name": "求一个数比另一个数多（或少）几分之几",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1764054,
            "name": "求比一个数多（或少）几分之几的数是多少",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1765054,
            "name": "已知比一个数多（或少）几分之几的数是多少，求这个数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1766054,
            "name": "分数加减混合运算",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1767054,
                "name": "分数连加、连减",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1768054,
                "name": "分数加减混合",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1769054,
                "name": "加法运算定律推广到分数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1770054,
                "name": "减法的运算性质推广到分数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1771054,
                "name": "分数加减混合简算",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1772054,
            "name": "分数乘除混合运算",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1773054,
                "name": "分数连乘",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1774054,
                "name": "分数连除",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1775054,
                "name": "分数乘除混合",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1776054,
                "name": "乘法运算定律推广到分数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1777054,
                "name": "除法的运算性质推广到分数",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1778054,
                "name": "分数乘除混合简算",
                "count": 0,
                "score_rate": -1
              }
            ]
          },
          {
            "id": 1779054,
            "name": "分数四则混合运算",
            "count": 0,
            "score_rate": -1,
            "children": [
              {
                "id": 1780054,
                "name": "分数加减法和乘法混合运算",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1781054,
                "name": "分数加减乘除混合运算",
                "count": 0,
                "score_rate": -1
              },
              {
                "id": 1782054,
                "name": "带括号的分数混合运算",
                "count": 0,
                "score_rate": -1
              }
            ]
          }
        ]
      },
      {
        "id": 1783054,
        "name": "百分数",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1784054,
            "name": "百分数的认识",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1785054,
            "name": "百分数和小数、分数的互化",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1786054,
            "name": "求百分率",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1787054,
            "name": "求一个数的百分之几是多少",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1788054,
            "name": "已知一个数的百分之几是多少，求这个数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1789054,
            "name": "求一个数比另一个数多（或少）百分之几",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1790054,
            "name": "求比一个数多（或少）百分之几的数是多少",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1791054,
            "name": "已知比一个数多（或少）百分之几的数是多少，求这个数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1792054,
            "name": "利息、利率、本金",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1793054,
            "name": "纳税与税率",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1794054,
            "name": "折扣、成数",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1813054,
            "name": "等可能事件",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 1795054,
    "name": "比和比例",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1797054,
        "name": "比",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1799054,
            "name": "比的认识",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1800054,
            "name": "比的基本性质",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1801054,
            "name": "化简比",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1802054,
            "name": "比与分数、除法的关系",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1798054,
        "name": "比例",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1803054,
            "name": "比例的意义",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1804054,
            "name": "比例的基本性质",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  },
  {
    "id": 1796054,
    "name": "图形与几何",
    "count": 0,
    "score_rate": -1,
    "children": [
      {
        "id": 1805054,
        "name": "圆",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1807054,
            "name": "圆的认识",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1808054,
            "name": "圆的周长",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1809054,
            "name": "圆的面积",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1810054,
            "name": "圆与正方形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1811054,
            "name": "弧、圆心角与扇形",
            "count": 0,
            "score_rate": -1
          },
          {
            "id": 1814054,
            "name": "圆环的面积",
            "count": 0,
            "score_rate": -1
          }
        ]
      },
      {
        "id": 1806054,
        "name": "长方体和正方体",
        "count": 0,
        "score_rate": -1,
        "children": [
          {
            "id": 1812054,
            "name": "长方体的再认识",
            "count": 0,
            "score_rate": -1
          }
        ]
      }
    ]
  }
]

</script>

<style lang="less">

</style>